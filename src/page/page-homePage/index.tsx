import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import ContainerCard from "../../components/Card/ContainerCard";
import styled from "styled-components";
import CardItem from "./CardInfo/CardItem";
import BottomItem from "./CardInfo/CardBottom";
import SwapInfo from "./CardInfo/SwapInfo";
import { ReactComponent as DogIcon } from "../../assets/symbols_DOGE.svg";
import { ReactComponent as BtcIcon } from "../../assets/symbols_BTC.svg";
import { ReactComponent as ExchangeIcon } from "../../assets/icon_exchange.svg";
import { AccountsContext } from "../../hooks/AccountsProvider";
import { ApiContext } from "../../hooks/ApiProvider";
import { web3FromAddress } from "@polkadot/extension-dapp";
import { TokenContext } from "../../hooks/TokenProvider";
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
      bottom: 165px;
      width: 26px;
      height: 26px;
      margin-left: 120px;
      cursor: pointer;
    }
  }
`;

interface CoinInfo {
  coinName: string;
  coinIcon: React.ReactNode;
  coinBalence: string;
}

interface CoinInput {
  coinIndex: Number;
  coinInput: any;
  canSwap: Boolean;
}
interface PriceData {
  inPrice: number;
  outPrice: any;
  number?: any;
  number2?: any;
  setInPrice?: any;
  setOutPrice?: any;
  setNumber?: any;
  setNumber2?: any;
}
export const PriceContext = createContext<PriceData>({} as PriceData);

const HomePage = (): React.ReactElement => {
  const { api, isApiReady } = useContext(ApiContext);
  const { currentAccount } = useContext(AccountsContext);
  const [blockNumber, setBlockNumber] = useState<any>(null);
  const [outPrice, setOutPrice] = useState<any>(null);
  const [inPrice, setInPrice] = useState<any>(null);
  let [number, setNumber] = useState(0);
  let [number2, setNumber2] = useState(0);
  const { tokenList, accountBalance } = useContext(TokenContext);
  const [coinInfo, setCoinInfo] = useState<CoinInfo[]>([
    {
      coinName: "XDOT",
      coinIcon: <DogIcon />,
      coinBalence: "999.0067",
    },
    {
      coinName: "XDOGE",
      coinIcon: <BtcIcon />,
      coinBalence: "999.0067",
    },
  ]);
  const [coinInput, setCoinInput] = useState<CoinInput[]>([
    { coinIndex: 0, coinInput: inPrice, canSwap: true },
    { coinIndex: 1, coinInput: outPrice, canSwap: true },
  ]);

  useEffect(() => {
    if (isApiReady && api && tokenList[0]) {
      //@ts-ignore
      api.rpc.swap
        .getAmountOutPrice(inPrice * Math.pow(10, tokenList[0].decimals), [
          tokenList[0].id,
          tokenList[1].id,
        ])
        .then((list: any) => {
          //@ts-ignore
          setOutPrice(parseInt(Number(list)) / Math.pow(10, tokenList[0].decimals)
          );
        });
      setCoinInput([
        { coinIndex: 0, coinInput: inPrice, canSwap: true },
        { coinIndex: 1, coinInput: outPrice, canSwap: true },
      ]);
    }
  }, [number]);

  useEffect(() => {
    if (isApiReady && api && tokenList[1]) {
      //@ts-ignore
      api.rpc.swap
        .getAmountInPrice(outPrice * Math.pow(10, tokenList[1].decimals), [
          tokenList[0].id,
          tokenList[1].id,
        ])
        .then((list: any) => {
          //@ts-ignore
          setInPrice(parseInt(Number(list)) / Math.pow(10, tokenList[1].decimals)
          );
        });
      setCoinInput([
        { coinIndex: 0, coinInput: inPrice, canSwap: true },
        { coinIndex: 1, coinInput: outPrice, canSwap: true },
      ]);
    }
  }, [number2]);
  
  const [isShowSwapInfo, setIsShowSwapInfo] = useState(false);
  const { isExtensionInjected } = useContext(AccountsContext);
  const swapCoin = [
    {
      coinName: coinInfo[0].coinName,
      coinIcon: coinInfo[0].coinIcon,
      coinNum: inPrice,
    },
    {
      coinName: coinInfo[1].coinName,
      coinIcon: coinInfo[1].coinIcon,
      coinNum: outPrice,
    },
  ];
  const clearCoinInput = () => {
    setCoinInput([
      ...[
        { coinIndex: 0, coinInput: "", canSwap: true },
        { coinIndex: 1, coinInput: "", canSwap: true },
      ],
    ]);
  };
  const addCoin = (item: any, index: any) => {
    if (
      coinInfo.some((n) => {
        return n.coinName === item.coinName;
      })
    ) {
      alert("error");
      return;
    }
    coinInfo[index.index] = item;
    let list = coinInfo;
    setCoinInfo([...list]);
    clearCoinInput();
  };
  const exChangeIcon = () => {
    setCoinInfo([...coinInfo].reverse());
    clearCoinInput();
    setIsShowSwapInfo(false);
  };

  
  console.log('isShowSwapInfo',isShowSwapInfo)
  return (
    <PriceContext.Provider
      value={{
        inPrice,
        outPrice,
        number,
        number2,
        setInPrice,
        setOutPrice,
        setNumber,
        setNumber2,
      }}
    >
      <Container>
        <Header />
        <Content>
          {/*<ConfirmModal confirmType={'waiting'}/>*/}
          <ContainerCard title="Swap" className={"cardContent"}>
            {/* 货币一 */}
            <CardItem
              index={0}
              currencyTitle="From"
              currencyBalence={coinInfo[0].coinBalence}
              currencyName={coinInfo[0].coinName}
              addCoin={addCoin}
              // canSwap={setCanSwap}
              showSwapInfo={setIsShowSwapInfo}
              inputCoinValue={{ coinInput, setCoinInput }}
              
            >
              {coinInfo[0].coinIcon}
            </CardItem>
            {/* 转换icon */}
            <ExchangeIconStyle>
              <div className="box" onClick={exChangeIcon}>
                <div className="iconBox">
                  <ExchangeIcon />
                </div>
              </div>
            </ExchangeIconStyle>
            {/* 货币二 */}
            <CardItem
              index={1}
              currencyTitle="To"
              currencyName={coinInfo[1].coinName}
              currencyBalence={coinInfo[1].coinBalence}
              addCoin={addCoin}
              // canSwap={setCanSwap}
              showSwapInfo={setIsShowSwapInfo}
              inputCoinValue={{ coinInput, setCoinInput }}
              
            >
              {coinInfo[1].coinIcon}
            </CardItem>
            {/* 底部按钮 */}
            {coinInput[0].canSwap && coinInput[1].canSwap && (
              <BottomItem
                name="Slippage Tolerance"
                value="1%"
                swapCoinInfo={swapCoin}
                btnLabel={!isExtensionInjected ? "Connect Wallet" : "Swap"}
                className="buttonDiv"
                setIsShowSwapInfo={setIsShowSwapInfo}
              />
            )}
            {(!coinInput[0].canSwap || !coinInput[1].canSwap) && (
              <BottomItem
                name="Slippage Tolerance"
                value="1%"
                btnLabel={"Insufficient DOT Balance"}
                className="cannot-swap"
                setIsShowSwapInfo={setIsShowSwapInfo}
              />
            )}

            {/* Swap info */}
          </ContainerCard>
        </Content>
        {isShowSwapInfo && <SwapInfo />}
      </Container>
    </PriceContext.Provider>
  );
};

export default HomePage;
