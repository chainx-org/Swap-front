import React, { useContext, useEffect, useMemo, useState } from "react";
import Issue from "../../components/Issue";
import { useTranslation } from "react-i18next";
import Redeem from "../../components/Redeem";
import IssueBubble from "../../components/TransactionBubble/IssueBubble";
import RedeemBubble from "../../components/TransactionBubble/RedeemBubble";
import { TransactionBubbleStyle } from "../../components/TransactionBubble/style";
import { Button, Modal, notification } from "antd";
import warningLogo from "./icons/redWarning.svg";
import warningLogo2 from "./icons/warning2.svg";
import { useTab } from "../../hooks/useTab";
import { FeeContext } from "../../hooks/useFeeContext";
import useAccountModel from "../../hooks/useAccountModel";
import { IssueRequestsContext } from "../../hooks/useIssueRequests";
import { decodeAddress, encodeAddress } from "@polkadot/keyring";
import { useApi } from "../../hooks/useApi";
import { RedeemRequestsContext } from "../../hooks/useRedeemRequest";
import { stringToHex } from "@polkadot/util";
import { web3FromAddress } from "@polkadot/extension-dapp";
import { useLeftBlock } from "../../hooks/useLeftBlock";
import { useApiReady } from "../../hooks/useApiReady";
enum Tab {
  Issue,
  Redeem,
}

function Bridge() {
  const value = useContext(IssueRequestsContext);
  const RedeemData = useContext(RedeemRequestsContext);
  const { currentAccount } = useAccountModel();
  const { api, isApiReady } = useApi();
  const [IssueRequestList,SetIssueRequestList] = useState([] as any[]);
  const [RedeemRequestList,SetRedeemRequestList] = useState([] as any[])
  let polkaAccount = encodeAddress(
    decodeAddress(currentAccount ? currentAccount.address : "16aVMBpJEdRe3PW2E3AsWENYhoKUaeTfDT6P6fdUCQtiiHVL"),
    0
  );
  useMemo(() => {
    let AllIssueRequestList: Array<any> = JSON.parse(JSON.stringify(value))
      .requests;
      let issueList = AllIssueRequestList.filter((item) => item.requester === polkaAccount)
    SetIssueRequestList(issueList)
  }, [value])
  useMemo(() => {
    let AllRedeemRequestList: Array<any> = JSON.parse(
      JSON.stringify(RedeemData)
    ).requests;
    let RedeemList = AllRedeemRequestList.filter(
      (item) => item.requester === polkaAccount
    )
    SetRedeemRequestList(RedeemList)
  }, [RedeemData])

  const [issueModalVisible, SetIssueModalVisible] = useState(false);
  const [RedeemModalVisible, SetRedeemModalVisible] = useState(false);
  const [issueClickId, SetissueClickId] = useState("");
  const [RedeemClickId, SetRedeemClickId] = useState("");
  const [leftBlock, setLeftBlock] = useState(100);
  const { t } = useTranslation();
  const { setActiveTab, isActive } = useTab(Tab.Issue);
  const issueModalData = IssueRequestList.filter(
    (item) => item.id === issueClickId
  );
  const RedeemModalData = RedeemRequestList.filter(
    (item) => item.id === RedeemClickId
  );
  useEffect(() => {
    if (!RedeemModalData[0]) return;
    let unsub = api.rpc.chain.subscribeNewHeads((header) => {
      setLeftBlock(
        Math.max(
          0,
          100 - header.number.toNumber() + +RedeemModalData[0].openTime
        )
      );
    });
    return () => {
      unsub.then();
    };
  }, [RedeemClickId]);
  // async function ConfirmationIssue() {
  //   const injector = await web3FromAddress(currentAccount!!.address);
  //   api.tx.xGatewayBitcoinV2
  //     .executeIssue(parseInt(issueClickId), "", "", "")
  //     .signAndSend(
  //       currentAccount!!.address,
  //       { signer: injector.signer },
  //       ({ status, dispatchError }) => {
  //         if (status.isInBlock) {
  //           notification["success"]({
  //             message: `Completed at block hash ${status.asInBlock.toString()}`,
  //             duration: 0,
  //           });
  //         } else if (dispatchError) {
  //           if (dispatchError.isModule) {
  //             const decode = api.registry.findMetaError(dispatchError.asModule);
  //             const { documentation, name, section } = decode;
  //             notification["error"]({
  //               message: `${section}.${name}: ${documentation.join(" ")}`,
  //               duration: 0,
  //             });
  //           }
  //         } else {
  //           notification["success"]({
  //             message: `Current status: ${status.type}`,
  //             duration: 0,
  //           });
  //           if (status.type === "Finalized") {
  //             SetIssueModalVisible(false);
  //           }
  //         }
  //       }
  //     );
  // }
  async function handleCancelRedemption() {
    const injector = await web3FromAddress(currentAccount!!.address)
    api.tx.xGatewayBitcoinV2.cancelRedeem(RedeemClickId,false)
        .signAndSend(currentAccount!!.address,{signer:injector.signer},({status,dispatchError,events}) => {
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
                  SetRedeemModalVisible(false)
                }
            }
        }
        ).catch((error) => {
        notification['error']({
            message: `:( transaction failed', ${error}`,
            duration: 0
        })
    })
  }
  async function handleForceCancel() {
    const injector = await web3FromAddress(currentAccount!!.address)
    api.tx.xGatewayBitcoinV2.cancelRedeem(RedeemClickId,true)
        .signAndSend(currentAccount!!.address,{signer:injector.signer},({status,dispatchError,events}) => {
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
                  SetRedeemModalVisible(false)
                }
            }
        }
        ).catch((error) => {
        notification['error']({
            message: `:( transaction failed', ${error}`,
            duration: 0
        })
    })
  }
  return (
    <>
    </>
  );
}

export default Bridge;
