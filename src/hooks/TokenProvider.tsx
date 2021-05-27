import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiContext } from "./ApiProvider";
import { AccountsContext } from "./AccountsProvider";

import ETHSymbol from "../assets/symbols_ETH.svg";
import DOGESymbol from "../assets/symbols_DOGE.svg";
import BtcIcon from "../assets/symbols_BTC.svg";
import BhcIcon from "../assets/symbols_BHC.svg";
import pcx from "../assets/chainx-pcx.svg";
import XDOT from "../assets/symbols_DOT.svg";
import White from "../assets/white.png";
import { BigNumber } from "bignumber.js";
import { Json } from "@polkadot/types";
export interface TokenData {
  tokenList: TokenItem[] | [];
  setTokenList: React.Dispatch<any>;
  accountBalance: AccountBalance | {};
  coinList: any;
}

export interface TokenItem {
  id: number;
  unit: string;
  name: string;
  decimals: number;
}

export interface TokenInfo extends TokenItem {
  assetNumber: number;
}

export interface AccountBalance {
  XBTC: TokenInfo;
  XBCH: TokenInfo;
  XDOGE: TokenInfo;
  XETH: TokenInfo;
  XDOT: TokenInfo;
}

export interface CoinItem {
  id: number;
  icon: string;
  name: string;
  decimals: number;
}

export const TokenContext = createContext<TokenData>({} as TokenData);

// let balanceType: string[] = ["PCX", "XBTC", "XETH", "XDOGE", "XBCH", "XDOT"];
// let balanceType: string[] = [];

export const TokenProvider: FC = ({ children }) => {
  const { api, isApiReady } = useContext(ApiContext);
  const { currentAccount } = useContext(AccountsContext);
  const [accountBalance, setAccountBalance] = useState<AccountBalance | {}>({});
  const [balanceType, setBalanceType] = useState([""]);
  const [tokenList, setTokenList] = useState<TokenItem[] | []>([]);
  const [coinList, setCoinList] = useState([
    {
      id: 0,
      unit: "",
      icon: White,
      coinBalance: "",
      decimals: null,
    },
    {
      id: 1,
      unit: "",
      icon: White,
      coinBalance: "",
      decimals: null,
    },
  ]);

  useEffect(() => {
    let a: any = localStorage.getItem("coinList");
    let localCoinList: any = JSON.parse(a);
    if (a == null) {
    } else {
      setCoinList([...localCoinList]);
    }
  }, [isApiReady, tokenList, currentAccount.address]);

  useEffect(() => {
    if (isApiReady && api) {
      //@ts-ignore

      api.rpc.swap.getTokenList().then((list) => {
        list.length &&
          setTokenList(
            list.map((i: any) => ({
              id: Number(i.assetId),
              unit: i.assetInfo.token.toString(),
              name: i.assetInfo.chain.toString(),
              decimals: Number(i.assetInfo.decimals),
            }))
          );
        setBalanceType([]);
        console.log(JSON.stringify(list), "list");
        let coinNameResult = JSON.stringify(list);
        let result = JSON.parse(coinNameResult);
        let resultCoin: string[] = [];
        result.map((item: any) => {
          console.log(item.assetInfo, item.assetId);
          resultCoin.push(item.assetInfo.token);
        });
        setBalanceType(resultCoin);
        // console.log(resultCoin, "resultCoin");
      });
    }
  }, [isApiReady, currentAccount.address, api]);

  function addCoinIcon(accountList: any) {
    accountList.map((item: any) => {
      switch (item.unit) {
        case "PCX":
          item.icon = pcx;
          break;
        case "XBTC":
          item.icon = BtcIcon;
          break;
        case "XBCH":
          item.icon = BhcIcon;
          break;
        case "XDOGE":
          item.icon = DOGESymbol;
          break;
        case "XETH":
          item.icon = ETHSymbol;
          break;
        case "XDOT":
          item.icon = XDOT;
          break;
        case "CBTC":
          item.icon = BtcIcon;
          break;
        default:
          item.icon = XDOT;
          break;
      }
    });
    setTokenList(accountList);
  }
  useEffect(() => {
    const timer: NodeJS.Timeout = setInterval(() => {
      if (tokenList.length > 0) {
        addCoinIcon(tokenList);
        let result: any[] = [];
        const promiseList: Promise<void>[] = [];
        tokenList.map((t: TokenItem, i: any) => {
          const promise = new Promise<void>((resolve, reject) => {
            //@ts-ignore
            api.rpc.swap
              .getBalance(t.id, currentAccount.address)
              .then((balance: any) => {
                result.push({
                  // ...accountBalance,
                  [balanceType[i]]: {
                    id: t.id,
                    unit: t.unit,
                    name: t.name,
                    decimals: t.decimals,
                    assetNumber: Number(balance),
                  },
                });
                setAccountBalance(result);
                resolve();
              })
              .catch(() => {
                reject();
              });
          });
          promiseList.push(promise);
        });
        Promise.all(promiseList).then(() => {
          let coinBalance: any = addCoinBalance(tokenList, result);
          setCoinList([...coinBalance]);
          //input into localStorage
          console.log("localCoinList", coinBalance);
          localStorage.setItem("coinList", JSON.stringify([...coinBalance]));
          result = [];
          setAccountBalance({});
        });
      }
      // else {
      //   console.log("tokenList为空");
      // }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [isApiReady, currentAccount.address, tokenList, []]);

  function accuracy(decimalsInput: number, balance: number) {
    let accuracyResult = new BigNumber(balance);
    let divisionNumber = new BigNumber(Math.pow(10, decimalsInput));
    accuracyResult = accuracyResult.dividedBy(divisionNumber);
    let result = accuracyResult.toNumber();
    let resultFix = result.toFixed(4);
    return resultFix;
  }
  function addCoinBalance(accountList: any, Balance: any) {
    Balance.map((item: any) => {
      const keys = Object.keys(item);
      accountList.map(
        (child: { unit: string; coinBalance: any; decimals: any }) => {
          if (child.unit === keys[0]) {
            child.decimals = item[keys[0]]["decimals"];
            child.coinBalance = accuracy(
              item[keys[0]]["decimals"],
              item[keys[0]]["assetNumber"]
            );
          }
        }
      );
    });
    return accountList;
  }

  return (
    <TokenContext.Provider
      value={{
        tokenList,
        accountBalance,
        coinList,
        setTokenList,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
