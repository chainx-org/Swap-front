import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Header from "../../components/Header";
import ContainerCard from "../../components/Card/ContainerCard";
import styled from "styled-components";
import CardItem from "./CardInfo/CardItem";
import BottomItem from "./CardInfo/CardBottom";
import SwapInfo from "./CardInfo/SwapInfo";
import DogIcon from "../../assets/symbols_DOGE.svg";
import BtcIcon from "../../assets/symbols_BTC.svg";
import { ReactComponent as ExchangeIcon } from "../../assets/icon_exchange.svg";
import { AccountsContext } from "../../hooks/AccountsProvider";
import { ApiContext } from "../../hooks/ApiProvider";
import {
  web3FromAddress,
  isWeb3Injected,
  web3Enable,
  web3Accounts,
} from "@polkadot/extension-dapp";
import { TokenContext } from "../../hooks/TokenProvider";
import { canFirstSwap, canSecondSwap } from "../../helper/canSwap";
import BigNumber from "bignumber.js";

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
  // const[[inPrice,outPrice],setPrice] = useState<any>([])
  let [number, setNumber] = useState(0);
  let [number2, setNumber2] = useState(0);
  let [firstItemId, setFirstItemId] = useState(0);
  let [secondItemId, setSecondItemId] = useState(1);

  const { tokenList, setTokenList, accountBalance } = useContext(TokenContext);
  const { coinList } = useContext(TokenContext);
  const [coinInfo, setCoinInfo] = useState([
    coinList[firstItemId],
    coinList[secondItemId],
  ]);

  // @ts-ignore
  const [coinInput, setCoinInput] = useState<CoinInput[]>([
    { coinIndex: 0, coinInput: inPrice, canSwap: true },
    { coinIndex: 1, coinInput: outPrice, canSwap: true },
  ]);
  const swapCoin = [
    {
      coinName: coinInfo[0].coinName,
      coinIcon: coinInfo[0].coinIcon,
      coinNum: inPrice,
      id: coinInfo[0].id,
      unit: coinInfo[0].unit,
      icon: coinInfo[0].icon,
      decimals: coinInfo[0].decimals,
    },
    {
      coinName: coinInfo[1].coinName,
      coinIcon: coinInfo[1].coinIcon,
      coinNum: outPrice,
      id: coinInfo[1].id,
      unit: coinInfo[1].unit,
      icon: coinInfo[1].icon,
      decimals: coinInfo[1].decimals,
    },
  ];
  const [isShowSwapInfo, setIsShowSwapInfo] = useState(false);
  const { isExtensionInjected } = useContext(AccountsContext);

  useEffect(() => {
    let inPriceAccount = new BigNumber(inPrice);
    let inPriceDecimal = new BigNumber(Math.pow(10, coinInfo[0].decimals));
    if (isApiReady && api && coinInfo[0]) {
      let result = 0;
      
        //@ts-ignore
        api.rpc.swap
          .getAmountOutPrice(
            Number(inPriceAccount.multipliedBy(inPriceDecimal)),
            [coinInfo[0].id, coinInfo[1].id]
          )
          .then((list: any) => {
            let outPriceAccount = new BigNumber(parseInt(list));
            result =
              //@ts-ignore
              Number(outPriceAccount.dividedBy(inPriceDecimal));
            setOutPrice(result);
          })
          .catch(
            setOutPrice(null)
          )
      
    }
  }, [number]);

  useEffect(() => {
    let outPriceAccount = new BigNumber(outPrice);
    let outPriceDecimal = new BigNumber(Math.pow(10, coinInfo[1].decimals));
    if (isApiReady && api && coinInfo[1]) {
      let result = 0;
      //@ts-ignore
      api.rpc.swap
        .getAmountInPrice(
          Number(outPriceAccount.multipliedBy(outPriceDecimal)),
          [coinInfo[0].id, coinInfo[1].id]
        )
        .then((list: any) => {
          let inPriceAccount = new BigNumber(parseInt(list));
          result =
            //@ts-ignore
            Number(inPriceAccount.dividedBy(outPriceDecimal));
          setInPrice(result);
        })
        .catch(
          setInPrice(null)
        )
    }
  }, [number2]);

  
  useEffect(() => {
    // debugger;
    let a = canFirstSwap(inPrice, coinInfo[0].coinBalance);
    let b = canSecondSwap(outPrice, coinInfo[1].coinBalance);
    setCoinInput([
      { coinIndex: 0, coinInput: inPrice, canSwap: a },
      { coinIndex: 1, coinInput: outPrice, canSwap: b },
    ]);
  }, [coinList, number, number2]);

  useEffect(() => {
    if (inPrice && outPrice) {
      setIsShowSwapInfo(true);
    } else {
      setIsShowSwapInfo(false);
    }
  }, [inPrice, outPrice]);

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
      coinInfo.some((n: { unit: any }) => {
        return n.unit === item.unit;
      })
    ) {
      alert("error");
      return;
    }
    coinInfo[index.index] = item;
    let list = coinInfo;
    if (index.index === 0) {
      setFirstItemId(item.id);
    } else {
      setSecondItemId(item.id);
    }
    setCoinInfo([...list]);
    clearCoinInput();
  };
  const exChangeIcon = () => {
    let a = firstItemId;
    let b = secondItemId;
    setFirstItemId(b);
    setSecondItemId(a);
    clearCoinInput();
    setInPrice(null);
    setOutPrice(null);
    setCoinInfo([coinList[firstItemId], coinList[secondItemId]]);
    setTokenList([...tokenList]);
  };
  const ConnectWallet = async () => {
    await web3Enable("connecting");
    if (isWeb3Injected) {
      const accounts = await web3Accounts();
    } else {
      window.location.href =
        "https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd";
    }
  };

  useEffect(() => {
    setCoinInfo([coinList[firstItemId], coinList[secondItemId]]);
  }, [coinList, firstItemId, secondItemId]);
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
                {coinInput[0].canSwap && (
                  <BottomItem
                    name="Slippage Tolerance"
                    value="1%"
                    swapCoinInfo={swapCoin}
                    btnLabel="Swap"
                    className="buttonDiv"
                    setIsShowSwapInfo={setIsShowSwapInfo}
                  />
                )}
                {!coinInput[0].canSwap && (
                  <BottomItem
                    name="Slippage Tolerance"
                    value="1%"
                    btnLabel={"Insufficient DOT Balance"}
                    className="cannot-swap"
                    setIsShowSwapInfo={setIsShowSwapInfo}
                  />
                )}
              </div>
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
