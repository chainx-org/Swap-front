import React, { useState, useContext } from "react";
import NormalButton from "../../Button";
import ContainerCard from "../../Card/ContainerCard";
import BackStatusContent from "./backStatusContent";
import ETHSymbol from "../../../assets/symbols_ETH.svg";
import DOGESymbol from "../../../assets/symbols_DOGE.svg";
import ArrowBlack from "../../../assets/arrow_black.svg";
import Loading from "../../../assets/loading.png";
import Error from "../../../assets/Feedback_failure.svg";
import Success from "../../../assets/Feedback_successed.svg";
import { ApiContext } from "../../../hooks/ApiProvider";
import { web3FromAddress } from "@polkadot/extension-dapp";
import { TokenContext } from "../../../hooks/TokenProvider";
import DogIcon from "../../../assets/symbols_DOGE.svg";
import {
  CoinInfoWrapper,
  ConfirmModalWrapper,
  PriceWrapper,
  StatusWrapper,
  WaitingWrapper,
} from "./style";
import PriceField from "./PriceField";
import Mask from "../../Mask";
import { AccountsContext } from "../../../hooks/AccountsProvider";

interface CoinNumItem {
  icon: string | undefined;
  coinIcon: string;
  coinName: string;
  coinNum: number;
}

interface ConfirmCardProps {
  statusValue?: "success" | "fail";
  confirmType: "priceInfo" | "waiting" | "transactionStatus";
  onCancel: React.Dispatch<boolean>;
  swapCoinInfo: any;
  setTransferStatus: React.Dispatch<any>;
  setStatusValue: React.Dispatch<any>;
  setIsShowSwapInfo?: any;
  transferStatus?: any;
}

interface PriceFieldItem {
  fieldName: string;
  fieldContent: string;
}

const ConfirmModal = ({
  confirmType,
  statusValue,
  onCancel,
  swapCoinInfo,
  setTransferStatus,
  setStatusValue,
  setIsShowSwapInfo,
  transferStatus,
}: ConfirmCardProps): React.ReactElement<ConfirmCardProps> => {
  const { api, isApiReady } = useContext(ApiContext);
  const [statusIcon, setStatusIcon] = useState(confirmType);
  const coinNumList: CoinNumItem[] = swapCoinInfo;
  // console.log(swapCoinInfo, "swapCoinInfo");
  const PriceFieldList: PriceFieldItem[] = [
    {
      fieldName: "Price",
      fieldContent: "15.83 XDOGE/XETH",
    },
    {
      fieldName: "Minimum Received",
      fieldContent: "15.83 XDOGE",
    },
    {
      fieldName: "Price Impact",
      fieldContent: "< 0.01%",
    },
    {
      fieldName: "Liquidity Provider Fee",
      fieldContent: "0.03926 XETH",
    },
  ];
  const Price = document && document.getElementsByClassName("num");
  // const { api, isApiReady } = useContext(ApiContext);
  const { currentAccount } = useContext(AccountsContext);
  const [blockNumber, setBlockNumber] = useState<any>(null);
  api?.derive.chain.bestNumber().then((blockNumber) => {
    setBlockNumber(Number(blockNumber));
  });
  const backPriceContent: React.ReactNode = (
    <PriceWrapper>
      {PriceFieldList.map((item, index) => (
        <PriceField
          key={index}
          name={item.fieldName}
          content={item.fieldContent}
        />
      ))}
      <NormalButton
        className="confirmButton"
        label="Confirm Swap"
        // onClick={() => confirmSwap()}
        onClick={() => confirmSwap()}
      />
    </PriceWrapper>
  );

  const backWaitingContent: React.ReactNode = (
    <WaitingWrapper>
      <img src={Loading} className="loading" alt="loading" />
      <div className="waiting">waiting for confimation</div>
      <div className="confirm">
        Confirm this transaction in polkadot-js/extension
      </div>
    </WaitingWrapper>
  );

  const backStatusContent: React.ReactNode = (
    // <StatusWrapper>
    //   {statusValue === "fail" ? (
    //     <>
    //       <img src={Error} className="status" alt="status" />
    //       <div className="statusValue">cause</div>
    //     </>
    //   ) : (
    //     <>
    //       <img src={Success} className="status" alt="status" />
    //       <div className="statusValue">transaction submitted</div>
    //     </>
    //   )}
    //   <NormalButton
    //     label="Close"
    //     onClick={() => {
    //       setIsShowSwapInfo(false);
    //     }}
    //   />
    // </StatusWrapper>
    <BackStatusContent statusValue={statusValue} onCancel={onCancel} />
  );

  const judgeConfirmType = (type: string): React.ReactNode => {
    switch (type) {
      case "priceInfo":
        return backPriceContent;
        break;
      case "waiting":
        return backWaitingContent;
        break;
      case "transactionStatus":
        return backStatusContent;
        break;
    }
  };
  // const Price:any = useRef()

  const confirmTransfer = (swapCoinInfo: any) => {
    console.log("swapCoinInfo[0]", swapCoinInfo[0], swapCoinInfo[0].coinNum);
    console.log("swapCoinInfo[1]", swapCoinInfo[1]);
    async function transfer() {
      if (api) {
        try {
          const injector = await web3FromAddress(
            currentAccount.address.toString()
          );
          api.setSigner(injector.signer);
          setTransferStatus("waiting");
          api.tx.swap
            .swapExactTokensForTokens(
              swapCoinInfo[0].coinNum * Math.pow(10, swapCoinInfo[0].decimals),
              "1", // any
              [swapCoinInfo[0].id, swapCoinInfo[1].id],
              currentAccount.address.toString(),
              blockNumber + 100
            )
            .signAndSend(
              currentAccount.address.toString(),
              { signer: injector.signer },
              (statusData) => {
                setTransferStatus("transactionStatus");
                setStatusValue("success");
              }
            )
            .catch((error) => {
              setTransferStatus("transactionStatus");
              setStatusValue("fail");
              console.log("error", error);
            });
        } catch (err) {
          setTransferStatus("transactionStatus");
          setStatusValue("fail");
          console.log(err);
        }
      }
    }
    transfer();
  };

  // const confirmSwap = () => {
  //   // console.log(Price.current.innerHTML)
  //   // for (let i = 0; i < Price.length; i++) {
  //   // console.log(Price[0].innerHTML)

  //   // }
  // };
  // // console.log(confirmType, "confirmType");

  function confirmSwap() {
    // console.log('swapCoinInfo',swapCoinInfo)
    // ~
    confirmTransfer(swapCoinInfo);
    // // setStatusIcon("transactionStatus");
    // // console.log(confirmType, "confirmType");
    // console.log(coinNumList, "coinNumList");
    // // debugger;
    // //调用一下接口，
    // if (isApiReady && api) {
    //   //@ts-ignore
    //   let result = api.tx.swap.swapExactTokensForTokens(
    //     100,
    //     100,
    //     [0, 1],
    //     "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    //     100
    //   );
    //   // .then((list: any) => {
    //   //   console.log(list, "list");
    //   // });
    //   // console.log(result, "result");
    // }
    // // debugger;
    // //成功就关闭这个弹框，显示成功的弹框，失败就显示失败信息的弹框
    // return;
  }

  return (
    <>
      <Mask />
      <ConfirmModalWrapper>
        <ContainerCard
          onCancel={onCancel}
          title="Confirm Swap"
          backContent={judgeConfirmType(transferStatus)}
        >
          <CoinInfoWrapper>
            <div className="numWrapper">
              {
              // coinNumList.map((item: CoinNumItem, index) => (
              //   <div className="numInfo" key={index}>
              //     <div className="coinName">
              //       {/* <span>{item.coinIcon}</span> */}
              //       <img src={item.icon} alt="" />
              //       <div className="name">{item.coinName}</div>
              //     </div>
              //     <div className="num">
              //       {parseFloat(`${item.coinNum}`).toFixed(8)}
              //     </div>
              //   </div>
              // ))
              <>
                <div className="numInfo">
                  <div className="coinName">
                    {/* <span>{item.coinIcon}</span> */}
                    <img src={coinNumList[0].icon} alt="" />
                    <div className="name">{coinNumList[0].coinName}</div>
                  </div>
                  <div className="num">
                    {parseFloat(`${coinNumList[0].coinNum}`).toFixed(8)}
                  </div>
                </div>
                <div className="numInfo">
                <div className="coinName">
                  {/* <span>{item.coinIcon}</span> */}
                  <img src={coinNumList[1].icon} alt="" />
                  <div className="name">{coinNumList[1].coinName}</div>
                </div>
                <div className="num">
                  {parseFloat(`${coinNumList[1].coinNum}`).toFixed(4)}
                </div>
              </div>
              </>
              }
            </div>
            <img className="arrowDown" src={ArrowBlack} alt="" />
          </CoinInfoWrapper>
        </ContainerCard>
      </ConfirmModalWrapper>
    </>
  );
};

export default ConfirmModal;
