import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  BridgeCardStyle,
  BridgeStyle,
  CancelRedeemStyle,
  FunctionSwitchButton,
  IssueModalFooter,
  IssueModalStyle,
  IssueModalTip,
  IssueTransferInfoStyle,
  RedeemModalFooterStyle,
  RedeemModalStyle,
  RedeemModalTip,
  RedeemTimeStyle,
  VaultBtcAddressStyle,
  VaultOpReturnStyle,
} from "./style";
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
    <BridgeStyle>
      <BridgeCardStyle>
        <FunctionSwitchButton>
          <ul>
            <li
              onClick={() => {
                setActiveTab(Tab.Issue);
              }}
              className={isActive(Tab.Issue) ? "active" : ""}
            >
              {t("issue")}
            </li>
            <li
              onClick={() => {
                setActiveTab(Tab.Redeem);
              }}
              className={isActive(Tab.Redeem) ? "active" : ""}
            >
              {t("Redeem")}
            </li>
          </ul>
        </FunctionSwitchButton>
        {isActive(Tab.Issue) ? <Issue /> : <Redeem />}
      </BridgeCardStyle>
      <TransactionBubbleStyle>
        <ul>
          {IssueRequestList.map((item) => (
            <IssueBubble
              key={item.id}
              BtcAmout={item.btcAmount}
              onClick={() => {
                SetIssueModalVisible(true);
                SetissueClickId(item.id);
              }}
            />
          ))}
          {RedeemRequestList.map((item) => (
            <RedeemBubble
              key={item.id}
              amount={item.amount}
              openTime={item.openTime}
              onClick={() => {
                SetRedeemModalVisible(true);
                SetRedeemClickId(item.id);
              }}
            />
          ))}
        </ul>
      </TransactionBubbleStyle>
      <IssueModalStyle>
        <Modal
          visible={issueModalVisible}
          onCancel={() => SetIssueModalVisible(false)}
          footer={null}
          getContainer={false}
          title={"请尽快完成转账"}
        >
          <IssueModalTip>
            <img src={warningLogo} alt="" />
            <div>若未在3天内完成，您将失去锁定的抵押品</div>
          </IssueModalTip>
          <IssueTransferInfoStyle>
            <div className={"info-title"}>转账金额</div>
            <div className={"transfer-amount"}>
              {issueModalData.length > 0
                ? (+issueModalData[0].btcAmount.toString(10)/100000000).toFixed(5)
                : 0}{" "}
              BTC
            </div>
            <div className={"transfer-tip"}>
              <img src={warningLogo2} alt="" />
              <div>请在单笔交易中转账,否则会造成资产损失</div>
            </div>
          </IssueTransferInfoStyle>
          <VaultBtcAddressStyle>
            <div className={"title"}>资产保险库的比特币地址</div>
            <div className={"address"}>
              {issueModalData.length > 0 ? issueModalData[0].btcAddress : ""}
            </div>
          </VaultBtcAddressStyle>
          <VaultOpReturnStyle>
            <div className={"title"}>OP_RETURN</div>
            <div className={"address"}>
              {stringToHex(
                issueModalData.length > 0 ? currentAccount?.address : ""
              ).substring(2,99)}
            </div>
          </VaultOpReturnStyle>
          <IssueModalFooter>
            <ul>
              <li>
                <div className={"title"}>发送请求标识</div>
                <div className={"content"}>
                  {issueModalData.length > 0
                    ? +issueModalData[0].id.toString(10)
                    : ""}
                </div>
              </li>
              <li>
                <div className={"title"}>发行数量</div>
                <div className={"content"}>
                  {issueModalData.length > 0
                    ? (parseInt(issueModalData[0].btcAmount)/100000000).toFixed(5)
                    : 0}{" "}
                  XBTC
                </div>
              </li>
              {/* <li>
                <div className={"title"}>交易确认数量</div>
                <div className={"content"}>-</div>
              </li> */}
            </ul>
          </IssueModalFooter>
          {/* <Button onClick={ConfirmationIssue}>确认交易</Button> */}
        </Modal>
      </IssueModalStyle>
      <RedeemModalStyle>
        <Modal
          visible={RedeemModalVisible}
          onCancel={() => SetRedeemModalVisible(false)}
          footer={null}
          getContainer={false}
          title={t("Redeem")}
        >
          <RedeemModalTip>
            <img src={warningLogo} alt="" />
            <div>
              {t(
                "If you do not receive the redeemed BTC within 48 hours, you can make a redemption request again after the cancellation of redemption or forced redemption. If you choose forced redemption, you will receive the equivalent PCX immediately"
              )}
            </div>
          </RedeemModalTip>
          <RedeemTimeStyle>
            <div className={"title"}>{t("Remaining time")}</div>
            <div className={"time"}>
              {new Date(leftBlock * 6 * 1000).toISOString().substr(11, 5)}
            </div>
          </RedeemTimeStyle>
          <CancelRedeemStyle>
            <Button disabled={leftBlock !== 0} onClick={handleCancelRedemption}>
              {t("Cancel redemption")}
            </Button>
            <div onClick={handleForceCancel} className={"force-redeem"}>
              {t("Forcible redemption")}
            </div>
          </CancelRedeemStyle>
          <RedeemModalFooterStyle>
            <ul>
              <li>
                <div className={"title"}>{t("Request ID")}</div>
                <div className={"content"}>
                  {RedeemModalData.length > 0
                    ? +RedeemModalData[0].id.toString(10)
                    : ""}
                </div>
              </li>
              <li>
                <div className={"title"}>{t("Amount")}</div>
                <div className={"content"}>
                  {" "}
                  {RedeemModalData.length > 0
                    ? (+RedeemModalData[0].amount.toString(10)/100000000).toFixed(5)
                    : 0}{" "}
                  XBTC
                </div>
              </li>
              {/* <li>
                <div className={"title"}>{t("Confirmation")}</div>
                <div className={"content"}>-</div>
              </li> */}
            </ul>
          </RedeemModalFooterStyle>
        </Modal>
      </RedeemModalStyle>
    </BridgeStyle>
  );
}

export default Bridge;
