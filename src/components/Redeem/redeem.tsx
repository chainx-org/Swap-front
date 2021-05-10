import React, { useEffect, useState } from "react";
import {BtcAddressStyle, RedeemBtcInputStyle, RedeemFooterStyle, RedeemStyle, XBtcBalanceStyle} from "./style";
import btcLogo from '../Issue/icons/btc.svg'
import {Button, Divider, Input, InputNumber, notification} from "antd";
import {useTranslation} from "react-i18next";
import useXbtcAssets from "../../hooks/useXbtcAssets"
import useAccountModel from "../../hooks/useAccountModel"
import { web3FromAddress } from "@polkadot/extension-dapp";
import { useApi } from "../../hooks/useApi";
var WAValidator = require('wallet-address-validator');
function Redeem() {
    const {currentAccount} = useAccountModel();
    const {t} = useTranslation()
    const [RedeemAmount,setRedeemAmount] = useState(0)
    const [BtcAddress,setBtcAddress] = useState("")
    const [n,setN] = useState(0)
    const {api, isApiReady} = useApi();
    const {XbtcBalance} = useXbtcAssets(currentAccount?.address!!,n)
    const handleReedem = async()=>{
        // let valid =  WAValidator.validate(BtcAddress,'BTC')
        // if(!valid){
        //     notification.warn({message: "请输入合法的BTC地址"});
        //     return
        // }
        if(RedeemAmount <= 0){
            notification.warn({message: "赎回的值必须大于0"});
            return
        }
        const injector = await web3FromAddress(currentAccount!!.address)
        api.tx.xGatewayBitcoinV2.requestRedeem(currentAccount!!.address,RedeemAmount * 100000000,BtcAddress)
        .signAndSend(currentAccount!!.address,{signer:injector.signer},({status,dispatchError,events})=>{
            if(status.isInBlock){
                notification['success']({
                    message: `Completed at block hash ${ status.asInBlock.toString()}`,
                    duration: 0
                })
            }else if(dispatchError){
                if(dispatchError.isModule){
                    const decoded = api.registry.findMetaError(dispatchError.asModule);
                    const { documentation, name, section } = decoded;
                    notification['error']({
                        message: `${section}.${name}: ${documentation.join(' ')}`,
                        duration: 0
                    })
                }
            }else{
                notification['success']({
                    message: `Current status: ${status.type}`,
                    duration: 0
                })
                if(status.type === "Finalized"){
                    setN(n + 1)
                }
            }
        }).catch((error)=> {
            notification['error']({
                message: `:( transaction failed', ${error}`,
                duration: 0
            })
        })
    }

    return (
        <RedeemStyle>
            <RedeemBtcInputStyle>
                <img src={btcLogo} alt=""/>
                <InputNumber value={RedeemAmount} onChange={(e)=> setRedeemAmount(e)}/>
                <div className={"btc-title"}>BTC</div>
            </RedeemBtcInputStyle>
            <XBtcBalanceStyle>
                {t('X-BTC balances')} {XbtcBalance ? XbtcBalance : "0"}
            </XBtcBalanceStyle>
            <BtcAddressStyle>
                <div className={"btc-address-info"}>
                    <div className={"btc-address-title"}>{t('BTC address')}</div>
                    <div className={"btc-fee"}>{t('Bitcoin Network Transaction Fees')} 0.0001 BTC</div>
                </div>
                <Input value={BtcAddress} onChange={(e)=> setBtcAddress(e.target.value)}/>
            </BtcAddressStyle>
            <Divider/>
            <RedeemFooterStyle>
                <div className={"redeem-footer-title"}>
                    {t('You will receive')}
                </div>
                <div className={"redeem-footer-num"}>
                    {RedeemAmount} BTC
                </div>
                <Button onClick={handleReedem}>
                    {t('next')}
                </Button>
            </RedeemFooterStyle>
        </RedeemStyle>
    )
}

export default Redeem;
