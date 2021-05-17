import React, { useState, useContext } from "react";
import NormalButton from "../../Button";
import ContainerCard from "../../Card/ContainerCard";
import BackStatusContent from "./backStatusContent";
import { ApiContext } from "../../../hooks/ApiProvider";
import ETHSymbol from "../../../assets/symbols_ETH.svg";
import DOGESymbol from "../../../assets/symbols_DOGE.svg";
import ArrowBlack from "../../../assets/arrow_black.svg";
import Loading from "../../../assets/loading.png";
import Error from "../../../assets/Feedback_failure.svg";
import Success from "../../../assets/Feedback_successed.svg";
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

interface CoinNumItem {
  coinIcon: string;
  coinName: string;
  coinNum: number;
}

interface ConfirmCardProps {
  statusValue?: "success" | "fail";
  confirmType: "priceInfo" | "waiting" | "transactionStatus";
  onCancel: React.Dispatch<boolean>;
  swapCoinInfo: any;
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
}: ConfirmCardProps): React.ReactElement<ConfirmCardProps> => {
  const { api, isApiReady } = useContext(ApiContext);
  const [statusIcon, setStatusIcon] = useState(confirmType);
  const coinNumList: CoinNumItem[] = swapCoinInfo;

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
        onClick={confirmSwap}
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
    <BackStatusContent statusValue={statusValue} />
  );

  const judgeConfirmType = (type: string): React.ReactNode => {
    switch (type) {
      case "priceInfo":
        return backPriceContent;
      case "waiting":
        return backWaitingContent;
      case "transactionStatus":
        return backStatusContent;
    }
  };

  function confirmSwap() {
    setStatusIcon("transactionStatus");
    // console.log(confirmType, "confirmType");
    console.log(coinNumList, "coinNumList");
    debugger;
    //调用一下接口，
    if (isApiReady && api) {
      //@ts-ignore
      let result = api.tx.swap.swapExactTokensForTokens(
        100,
        100,
        [0, 1],
        "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
        100
      );
      // .then((list: any) => {
      //   console.log(list, "list");
      // });
      console.log(result, "result");
    }
    debugger;
    //成功就关闭这个弹框，显示成功的弹框，失败就显示失败信息的弹框
    return;
  }

  return (
    <>
      <Mask />
      <ConfirmModalWrapper>
        <ContainerCard
          onCancel={onCancel}
          title="Confirm Swap"
          backContent={judgeConfirmType(statusIcon)}
        >
          <CoinInfoWrapper>
            <div className="numWrapper">
              {coinNumList.map((item: CoinNumItem, index) => (
                <div className="numInfo" key={index}>
                  <div className="coinName">
                    <img src={item.coinIcon} alt="" />
                    <div className="name">{item.coinName}</div>
                  </div>
                  <div className="num">{item.coinNum}</div>
                </div>
              ))}
            </div>
            <img className="arrowDown" src={ArrowBlack} alt="" />
          </CoinInfoWrapper>
        </ContainerCard>
      </ConfirmModalWrapper>
    </>
  );
};

export default ConfirmModal;
