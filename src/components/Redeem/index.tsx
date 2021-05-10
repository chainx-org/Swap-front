import React, { useEffect, useState } from "react";
import {AccountSwitch, RedeemBtcInputStyle, RedeemStyle} from "./style";
import {Button, InputNumber} from "antd";
import arrowYellow from '../Issue/icons/arrow_yellow.svg'
import arrowGray from '../Issue/icons/arrow_gray.svg'
import {useTranslation} from "react-i18next";
import AddressInput from "../AddressInput";
import TabCoinSelect from "../TabCoinSelect";
import BCHs from '../TabCoinSelect/icons/SBCH.svg'
import BTCs from '../TabCoinSelect/icons/SBTC.svg'
import DOGs from '../TabCoinSelect/icons/SDOG.svg'

interface coinProps {
    img_url: any,
    coinName: string,
    symol: string,
    balance: number
}

function Redeem(): React.ReactElement {
    const {t} = useTranslation()
    const optionList = [
        {
            img_url: BTCs,
            coinName: 'SBTC',
            symol: 'Bitcoin',
            balance: 9999.0024
        },
        {
            img_url: BCHs,
            coinName: 'SBCH',
            symol: 'Bitcoin Cash',
            balance: 9999.0024
        },
        {
            img_url: DOGs,
            coinName: 'SDOG',
            symol: 'Dogecoin',
            balance: 9999.0024
        }
    ]
    const [isShow, setIsShow] = useState(false)
    const [coinSymol, setCoinSymol] = useState<coinProps>({
        img_url: BTCs,
        coinName: 'SBTC',
        symol: 'Bitcoin',
        balance: 9999.0024
    })
    const currCoin = (value:any) => {
        setCoinSymol(value)
        setIsShow(!isShow)
    }
    const ShowSelect = () =>{
        setIsShow(!isShow)
    }

    return (
        <RedeemStyle>
            <div className='topContent'>
                <AccountSwitch>
                    <TabCoinSelect optionList={optionList} isShow={isShow} coinSymol={coinSymol} currCoin={currCoin} ShowSelect={ShowSelect}/>
                </AccountSwitch>
                <RedeemBtcInputStyle>
                    <div className='redeemNum'>
                        <InputNumber
                        value={``}
                        onChange={(e) => {
                            console.log(e)
                        }}
                        />
                        <div className={`btc-title`}>{coinSymol.coinName}</div>
                    </div>
                    <div className='balance'>{coinSymol.coinName} 余额 <span>1.00</span></div>
                    <AddressInput coinSymol={coinSymol}/>
                    <img src={ true ? arrowYellow : arrowGray } alt='to' className='arrow' />
                    <p className='receive'>{t("You will receive")}</p>
                    <div className={`redeemResNum`}>10.82730000 {coinSymol.coinName}</div>
                    <Button  className='yellow'>{t("next")}</Button>
                </RedeemBtcInputStyle>
            </div>
        </RedeemStyle>
    )
}

export default Redeem;
