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
import { BigNumber } from "bignumber.js";
export interface TokenData {
  tokenList: TokenItem[] | [];
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

const balanceType: string[] = ["PCX", "XBTC", "XBCH", "XDOGE", "XETH", "XDOT"];

export const TokenProvider: FC = ({ children }) => {
  const { api, isApiReady } = useContext(ApiContext);
  const { currentAccount } = useContext(AccountsContext);
  const [accountBalance, setAccountBalance] = useState<AccountBalance | {}>({});
  // // const [tokenList, setTokenList] = useState<TokenItem[] | []>([])
  // const [tokenList, setTokenList] = useState<TokenItem[] | []>([]);
  // console.log("tokenList", tokenList);
  // console.log("accountBalance", accountBalance);

  // useEffect(() => {
  //   if (isApiReady && api) {
  //     //@ts-ignore
  //     api.rpc.swap.getTokenList().then((list) => {
  //       console.log("list", list);
  //       setTokenList(
  //         list.map((i: any) => ({
  //           id: Number(i.assertId), // id
  //           unit: i.assertInfo.token.toString(), // 单位 token缩写
  //           name: i.assertInfo.chain.toString(), // 币种 链来源
  //           decimals: Number(i.assertInfo.decimals), // 精度
  //         }))
  //       );
  //     });
  //   }
  // }, [api, isApiReady, currentAccount.address]);
  // useEffect(() => {
  //   if (tokenList.length > 0) {
  //     tokenList.map((t: TokenItem) =>
  //       //@ts-ignore
  //       api.rpc.swap
  //         .getBalance(t.id, "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY")
  //         //@ts-ignore
  //         .then((balance) => {
  //           setAccountBalance({
  //             ...accountBalance,
  //             [balanceType[t.id]]: {
  //               id: t.id, // 	资产id
  //               unit: t.unit,
  //               name: t.name,
  //               decimals: t.decimals,
  //               assetNumber: Number(balance),
  //             },
  //           });
  //         })
  //     );
  //   }
  // }, [tokenList, currentAccount.address]);
  const [tokenList, setTokenList] = useState<TokenItem[] | []>([]);
  const [coinList, setCoinList] = useState([
    {
      id: 0,
      unit: "XDOT",
      icon: DOGESymbol,
      coinBalance: "999.0067",
      decimals: 1,
    },
    {
      id: 1,
      unit: "XDOGE",
      icon: DOGESymbol,
      coinBalance: "999.0067",
      decimals: 1,
    },
    ,
  ]);

  // console.log("tokenList", tokenList);
  // console.log("accountBalance", accountBalance);
  console.log("coinList", coinList);
  useEffect(() => {
    if (isApiReady && api) {
      //@ts-ignore
      api.rpc.swap.getTokenList().then((list) =>
        setTokenList(
          list.map((i: any) => ({
            id: Number(i.assertId),
            unit: i.assertInfo.token.toString(),
            name: i.assertInfo.chain.toString(),
            decimals: Number(i.assertInfo.decimals),
          }))
        )
      );
    }
  }, [isApiReady, currentAccount.address]);
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
          item.icon = DOGESymbol;
          break;
        default:
          break;
      }
    });
    setTokenList(accountList);
  }
  useEffect(() => {
    if (tokenList.length > 0) {
      addCoinIcon(tokenList);
      let result: any[] = [];
      const promiseList: Promise<void>[] = [];
      tokenList.map((t: TokenItem) => {
        const promise = new Promise<void>((resolve, reject) => {
          //@ts-ignore
          api.rpc.swap
            .getBalance(
              t.id,
              "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
            )
            .then((balance: any) => {
              result.push({
                ...accountBalance,
                [balanceType[t.id]]: {
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
      });
    }
  }, [tokenList, currentAccount.address]);

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
      console.log(accountList, "accountList");
    });
    return accountList;
  }

  return (
    <TokenContext.Provider
      value={{
        tokenList,
        accountBalance,
        coinList,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
