import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ContainerCard from "../../components/Card/ContainerCard";
import styled from "styled-components";
import CardItem from "./CardInfo/CardItem";
import BottomItem from "./CardInfo/CardBottom";
import SwapInfo from "./CardInfo/SwapInfo";
import { ReactComponent as ExchangeIcon } from "../../assets/icon_exchange.svg";
import { AccountsContext } from "../../hooks/AccountsProvider";
import {
  isWeb3Injected,
  web3Enable,
  web3Accounts,
} from "@polkadot/extension-dapp";
import { PriceContext } from "../../hooks/PriceProvider";

const Container = styled.div`
  background-image: linear-gradient(180deg, #faf5e8 7%, #f7f8fa 100%);
`;
const Content = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 90px;
`;

const ExchangeIconStyle = styled.div`
  .box {
    width: 100%;
    height: 24px;
    display: inline-block;
    .iconBox {
      position: absolute;
      z-index: 0;
      bottom: 165px;
      width: 26px;
      height: 26px;
      margin-left: 120px;
      cursor: pointer;
    }
  }
`;

const HomePage = (): React.ReactElement => {
  const {
    inPrice,
    outPrice,
    coinInput,
    setCoinInput,
    addCoin,
    coinInfo,
    swapCoin,
    exChangeIcon,
  } = useContext(PriceContext);
  const [isShowSwapInfo, setIsShowSwapInfo] = useState(false);
  const { isExtensionInjected } = useContext(AccountsContext);

  useEffect(() => {
    if (inPrice && outPrice) {
      setIsShowSwapInfo(true);
    } else {
      setIsShowSwapInfo(false);
    }
  }, [inPrice, outPrice]);

  const ConnectWallet = async () => {
    await web3Enable("connecting");
    if (isWeb3Injected) {
      const accounts = await web3Accounts();
    } else {
      window.location.href =
        "https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd";
    }
  };
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [transferStatus, setTransferStatus] =
    useState<"priceInfo" | "waiting" | "transactionStatus">("priceInfo");

  return (
    <Container>
      <Header />
      <Content>
        <ContainerCard title="Swap" className={"cardContent"}>
          {/* 货币一 */}
          <CardItem
            index={0}
            currencyTitle="From"
            currencyBalence={coinInfo[0].coinBalance}
            addCoin={addCoin}
            showSwapInfo={setIsShowSwapInfo}
            inputCoinValue={{ coinInput, setCoinInput }}
            currencyName={coinInfo[0].unit}
            id="Icon"
          >
            <img src={coinInfo[0].icon} alt="" />
          </CardItem>
          {/* 转换icon */}
          <ExchangeIconStyle>
            <div className="box">
              <div className="iconBox">
                <ExchangeIcon onClick={exChangeIcon} />
              </div>
            </div>
          </ExchangeIconStyle>
          {/* 货币二 */}
          <CardItem
            index={1}
            currencyTitle="To"
            currencyBalence={coinInfo[1].coinBalance}
            addCoin={addCoin}
            showSwapInfo={setIsShowSwapInfo}
            inputCoinValue={{ coinInput, setCoinInput }}
            currencyName={coinInfo[1].unit}
          >
            <img src={coinInfo[1].icon} alt="" />
          </CardItem>
          {/* 底部按钮 */}
          {!isExtensionInjected && (
            <div onClick={ConnectWallet}>
              <BottomItem
                name="Slippage Tolerance"
                value="1%"
                swapCoinInfo={swapCoin}
                btnLabel="Connect Wallet"
                className="ConnectWallet"
              ></BottomItem>
            </div>
          )}
          {isExtensionInjected && (
            <div>
              {!inPrice ||
              !outPrice ||
              (inPrice && outPrice && !coinInput[0].canSwap) ? (
                <BottomItem
                  name="Slippage Tolerance"
                  value="1%"
                  btnLabel={
                    !inPrice || !outPrice
                      ? `Enter an amount`
                      : inPrice && outPrice && !coinInput[0].canSwap
                      ? `Insufficient ${coinInfo[0].unit} Balance`
                      : ``
                  }
                  className="cannot-swap"
                  setIsShowSwapInfo={setIsShowSwapInfo}
                />
              ) : coinInput[0].canSwap ? (
                <BottomItem
                  name="Slippage Tolerance"
                  value="1%"
                  swapCoinInfo={swapCoin}
                  btnLabel="Swap"
                  className="buttonDiv"
                  setIsShowSwapInfo={setIsShowSwapInfo}
                  isConfirmOpen={isConfirmOpen}
                  setIsConfirmOpen={setIsConfirmOpen}
                  transferStatus={transferStatus}
                  setTransferStatus={setTransferStatus}
                  onClick={() => {
                    setIsConfirmOpen(true);
                    setTransferStatus("priceInfo");
                  }}
                />
              ) : null}
            </div>
          )}
        </ContainerCard>
      </Content>
      <SwapInfo isShowSwapInfo={isShowSwapInfo} />
    </Container>
  );
};

export default HomePage;
