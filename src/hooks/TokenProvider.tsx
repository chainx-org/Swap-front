import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiContext } from "./ApiProvider";
import { AccountsContext } from "./AccountsProvider";

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

export const TokenContext = createContext<TokenData>({} as TokenData);

const balanceType: string[] = ["PCX", "XBTC", "XBCH", "XDOGE", "XETH", "XDOT"];

export const TokenProvider: FC = ({ children }) => {
  const { api, isApiReady } = useContext(ApiContext);
  const { currentAccount } = useContext(AccountsContext);
  const [accountBalance, setAccountBalance] = useState<AccountBalance | {}>({});
  // const [tokenList, setTokenList] = useState<TokenItem[] | []>([])
  const [tokenList, setTokenList] = useState<TokenItem[] | []>([]);
  console.log("tokenList", tokenList);
  console.log("accountBalance", accountBalance);

  useEffect(() => {
    if (isApiReady && api) {
      //@ts-ignore
      api.rpc.swap.getTokenList().then((list) => {
        console.log("list", list);
        setTokenList(
          list.map((i: any) => ({
            id: Number(i.assertId), // id
            unit: i.assertInfo.token.toString(), // 单位 token缩写
            name: i.assertInfo.chain.toString(), // 币种 链来源
            decimals: Number(i.assertInfo.decimals), // 精度
          }))
        );
      });
    }
  }, [api, isApiReady, currentAccount.address]);
  useEffect(() => {
    if (tokenList.length > 0) {
      tokenList.map((t: TokenItem) =>
        //@ts-ignore
        api.rpc.swap
          .getBalance(t.id, "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY")
          //@ts-ignore
          .then((balance) => {
            setAccountBalance({
              ...accountBalance,
              [balanceType[t.id]]: {
                id: t.id, // 	资产id
                unit: t.unit,
                name: t.name,
                decimals: t.decimals,
                assetNumber: Number(balance),
              },
            });
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
