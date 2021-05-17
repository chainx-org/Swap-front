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
export interface TokenData {
  tokenList: TokenItem[] | [];
  accountBalance: AccountBalance | {};
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
  const [tokenList, setTokenList] = useState<TokenItem[] | []>([]);
  console.log("tokenList", tokenList);
  console.log("accountBalance", accountBalance);
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
      console.log(item.unit, "item.unit");
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
      tokenList.map((t: TokenItem) =>
        //@ts-ignore
        api.rpc.swap
          .getBalance(t.id, "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY")
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
          })
      );
    }
  }, [tokenList, currentAccount.address]);

  return (
    <TokenContext.Provider
      value={{
        tokenList,
        accountBalance,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
