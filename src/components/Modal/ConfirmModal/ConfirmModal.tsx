import React, { useState, useContext, useEffect } from "react";
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
import { TransferContext } from "../../../hooks/TransferProvider";
import BigNumber from "bignumber.js";
import BackWaitingContent from "./backWaitingContent";
import BackPriceContent from "./backPriceContent";

interface CoinNumItem {
  icon: string | undefined;
  coinIcon: string;
  coinName: string;
  coinNum: number;
  showDecimal: number;
}

interface ConfirmCardProps {
  statusValue?: "success" | "fail";
  confirmType?: "priceInfo" | "waiting" | "transactionStatus";
  onCancel?: React.Dispatch<boolean>;
  swapCoinInfo: any;
  setTransferStatus?: React.Dispatch<any>;
  setStatusValue: React.Dispatch<any>;
  setIsShowSwapInfo?: React.Dispatch<any>;
  transferStatus?: any;
}

const ConfirmModal = ({
  statusValue,
  onCancel,
  swapCoinInfo,
  setTransferStatus,
  setStatusValue,
  transferStatus,
}: ConfirmCardProps): React.ReactElement<ConfirmCardProps> => {
  const { api } = useContext(ApiContext);
  const coinNumList: CoinNumItem[] = [
    { ...swapCoinInfo[0], showDecimal: 8 },
    { ...swapCoinInfo[1], showDecimal: 4 },
  ];
  const { currentAccount } = useContext(AccountsContext);
  const [blockNumber, setBlockNumber] = useState<any>(null);
  useEffect(() => {
    api &&
      api.derive.chain.bestNumber().then((blockNumber) => {
        setBlockNumber(Number(blockNumber));
      });
  }, []);
  const backPriceContent: React.ReactNode = (
    <BackPriceContent confirmSwap={confirmSwap} />
  );
  const backWaitingContent: React.ReactNode = <BackWaitingContent />;
  const backStatusContent: React.ReactNode = (
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
  const { setErrorMessage } = useContext(TransferContext);
  const confirmTransfer = (swapCoinInfo: any) => {
    let hasPCX = false;
    for (let i = 0; i < swapCoinInfo.length; i++) {
      if (swapCoinInfo[i].id === 0) {
        hasPCX = true;
        break;
      }
    }
    let arr: any[] = [];
    if (hasPCX) {
      arr = [swapCoinInfo[0].id, swapCoinInfo[1].id];
    } else {
      arr = [swapCoinInfo[0].id, 0, swapCoinInfo[1].id];
    }

    let amount = new BigNumber(swapCoinInfo[0].coinNum);
    let amount2 = new BigNumber(swapCoinInfo[1].coinNum);
    let decimal = new BigNumber(Math.pow(10, swapCoinInfo[0].decimals));
    let allowDecimal = decimal.multipliedBy(0.99);
    async function transfer() {
      if (api) {
        try {
          const injector = await web3FromAddress(currentAccount.address);
          api.setSigner(injector.signer);
          setTransferStatus && setTransferStatus("waiting");
          api.tx.swap
            .swapExactTokensForTokens(
              Number(amount.multipliedBy(decimal)),
              Number(amount2.multipliedBy(allowDecimal)),
              arr,
              currentAccount.address,
              blockNumber + 100
            )
            .signAndSend(
              currentAccount.address,
              { signer: injector.signer },
              (statusData) => {
                const formatStatusData = JSON.parse(JSON.stringify(statusData));
                if (
                  formatStatusData.dispatchInfo &&
                  !formatStatusData.dispatchError
                ) {
                  setTransferStatus && setTransferStatus("transactionStatus");
                  setStatusValue("success");
                } else if (formatStatusData.dispatchError) {
                  setTransferStatus && setTransferStatus("transactionStatus");
                  setStatusValue("fail");
                  setErrorMessage(
                    `error: ${formatStatusData.dispatchError.module.error}
                    index: ${formatStatusData.dispatchError.module.index}`
                  );
                }
              }
            )
            .catch((error) => {
              setTransferStatus && setTransferStatus("transactionStatus");
              setStatusValue("fail");
              let errorMessage = error.toString();
              var index = errorMessage.lastIndexOf("e.g.");
              errorMessage =
                index > 0
                  ? errorMessage.substring(index + 4, errorMessage.length)
                  : errorMessage;
              setErrorMessage(errorMessage);
            });
        } catch (err) {
          setTransferStatus && setTransferStatus("transactionStatus");
          setStatusValue("fail");
        }
      }
    }
    transfer();
  };

  function confirmSwap() {
    confirmTransfer(swapCoinInfo);
  }

  return (
    <div>
      <Mask />
      <ConfirmModalWrapper className="confirmBox">
        <ContainerCard
          onCancel={onCancel}
          title="Confirm Swap"
          backContent={judgeConfirmType(transferStatus)}
        >
          <CoinInfoWrapper>
            <div className="numWrapper">
              {coinNumList.map((item: CoinNumItem, index) => (
                <div className="numInfo" key={index}>
                  <div className="coinName">
                    <img src={item.icon} alt="" />
                    <div className="name">{item.coinName}</div>
                  </div>
                  <div className="num">
                    {Number(item.coinNum).toFixed(item.showDecimal)}
                  </div>
                </div>
              ))}
            </div>
            <img className="arrowDown" src={ArrowBlack} alt="" />
          </CoinInfoWrapper>
        </ContainerCard>
      </ConfirmModalWrapper>
    </div>
  );
};

export default ConfirmModal;
