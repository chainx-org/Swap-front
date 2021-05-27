import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiContext } from "./ApiProvider";
import { TokenContext } from "./TokenProvider";
import { canFirstSwap, canSecondSwap } from "../helper/canSwap";
import BigNumber from "bignumber.js";
interface CoinInput {
  coinIndex: Number;
  coinInput: any;
  canSwap: Boolean;
}
interface PriceData {
  inPrice?: any;
  outPrice?: any;
  number?: any;
  number2?: any;
  setInPrice?: any;
  setOutPrice?: any;
  setNumber?: any;
  setNumber2?: any;
  coinInput?: any;
  setCoinInput?: any;
  addCoin?: any;
  coinInfo?: any;
  swapCoin?: any;
  exChangeIcon?: any;
}

export const PriceContext = createContext<PriceData>({} as PriceData);

// const balanceType: string[] = ["PCX", "XBTC", "XETH", "XDOGE", "XBCH", "XDOT"];

export const PriceProvider: FC = ({ children }) => {
  let [number, setNumber] = useState(0);
  let [number2, setNumber2] = useState(0);
  const [outPrice, setOutPrice] = useState<any>(null);
  const [inPrice, setInPrice] = useState<any>(null);
  const { api, isApiReady } = useContext(ApiContext);
  const { coinList } = useContext(TokenContext);
  let [firstItemId, setFirstItemId] = useState(0);
  let [secondItemId, setSecondItemId] = useState(1);
  const [coinInfo, setCoinInfo] = useState([
    coinList[firstItemId],
    coinList[secondItemId],
  ]);
  const [coinInput, setCoinInput] = useState<CoinInput[]>([
    { coinIndex: 0, coinInput: inPrice, canSwap: true },
    { coinIndex: 1, coinInput: outPrice, canSwap: true },
  ]);
  const { tokenList, setTokenList } = useContext(TokenContext);
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

  useEffect(() => {
    let a = canFirstSwap(inPrice, coinInfo[0].coinBalance);
    let b = canSecondSwap(outPrice, coinInfo[1].coinBalance);
    setCoinInput([
      { coinIndex: 0, coinInput: inPrice, canSwap: a },
      { coinIndex: 1, coinInput: outPrice, canSwap: b },
    ]);
  }, [coinList, number, number2]);

  useEffect(() => {
    let hasPCX = false;
    for (let i = 0; i < coinInfo.length; i++) {
      if (coinInfo[i].id === 0) {
        hasPCX = true;
        break;
      }
    }
    let arr = [];
    if (hasPCX) {
      arr = [coinInfo[0].id, coinInfo[1].id];
    } else {
      arr = [coinInfo[0].id, 0, coinInfo[1].id];
    }
    let inPriceAccount = new BigNumber(inPrice);
    let inPriceDecimal = new BigNumber(Math.pow(10, coinInfo[0].decimals));
    !inPrice && setOutPrice(null);
    if (isApiReady && api && coinInfo[0]) {
      let result = 0;
      inPrice &&
        //@ts-ignore
        api.rpc.swap
          .getAmountOutPrice(
            Number(inPriceAccount.multipliedBy(inPriceDecimal)),
            arr
          )
          .then((list: any) => {
            let outPriceAccount = new BigNumber(parseInt(list));
            result =
              //@ts-ignore
              Number(outPriceAccount.dividedBy(inPriceDecimal));
            setOutPrice(result);
          });
    }
  }, [number]);

  useEffect(() => {
    let hasPCX = false;
    for (let i = 0; i < coinInfo.length; i++) {
      if (coinInfo[i].id === 0) {
        hasPCX = true;
        break;
      }
    }
    let arr = [];
    if (hasPCX) {
      arr = [coinInfo[0].id, coinInfo[1].id];
    } else {
      arr = [coinInfo[0].id, 0, coinInfo[1].id];
    }
    let outPriceAccount = new BigNumber(outPrice);
    let outPriceDecimal = new BigNumber(Math.pow(10, coinInfo[1].decimals));
    !outPrice && setInPrice(null);
    if (isApiReady && api && coinInfo[1]) {
      let result = 0;
      outPrice &&
        //@ts-ignore
        api.rpc.swap
          .getAmountInPrice(
            Number(outPriceAccount.multipliedBy(outPriceDecimal)),
            arr
          )
          .then((list: any) => {
            let inPriceAccount = new BigNumber(parseInt(list));
            result =
              //@ts-ignore
              Number(inPriceAccount.dividedBy(outPriceDecimal));
            setInPrice(result);
          });
    }
  }, [number2]);
  useEffect(() => {
    setCoinInfo([coinList[firstItemId], coinList[secondItemId]]);
  }, [coinList, firstItemId, secondItemId]);

  const clearCoinInput = () => {
    setCoinInput([
      ...[
        { coinIndex: 0, coinInput: "", canSwap: true },
        { coinIndex: 1, coinInput: "", canSwap: true },
      ],
    ]);
  };
  const addCoin = (item: any, index: any, i: any) => {
    if (
      coinInfo.some((n: { unit: any }) => {
        return n.unit === item.unit;
      })
    ) {
      exChangeIcon();
      return;
    }
    coinInfo[index.index] = item;
    let list = coinInfo;
    if (index.index === 0) {
      // setFirstItemId(item.id);
      setFirstItemId(i);
    } else {
      // setSecondItemId(item.id);
      setSecondItemId(i);
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
        coinInfo,
        coinInput,
        setCoinInput,
        addCoin,
        exChangeIcon,
        swapCoin,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};
