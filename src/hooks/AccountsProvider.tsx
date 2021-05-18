import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiContext } from "./ApiProvider";
import { web3AccountsSubscribe, web3Enable } from "@polkadot/extension-dapp";

export interface AccountItem {
  address: string;
  name: string;
}

export interface AccountsData {
  isExtensionInjected: boolean;
  currentAccount: AccountItem;
  accountList: AccountItem[];
  setCurrentAccount: React.Dispatch<AccountItem>;
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

export const AccountsContext = createContext<AccountsData>({} as AccountsData);

const balanceType: string[] = ["PCX", "XBTC", "XBCH", "XDOGE", "XETH", "XDOT"];

export const AccountsProvider: FC = ({ children }) => {
  const { isApiReady } = useContext(ApiContext);
  const [accountList, setAccountList] = useState<AccountItem[]>([]);
  const [isExtensionInjected, setIsExtensionInjected] =
    useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<AccountItem>({
    address: "",
    name: "",
  });

  const getAccountList = async () => {
    const extensions = await web3Enable("swap");
    if (extensions.length === 0) {
      return;
    }
    setIsExtensionInjected(true);
    const account$ = await web3AccountsSubscribe((accounts) => {
      const accountsList = accounts.map((acc) => ({
        address: acc.address,
        name: acc.meta.name,
      }));
      setAccountList(accountsList as AccountItem[]);
    });
  };

  useEffect(() => {
    getAccountList();
  }, [isApiReady]);

  useEffect(() => {
    accountList.length >= 1
      ? setCurrentAccount(accountList[0])
      : setCurrentAccount({
          address: "",
          name: "",
        });
  }, [accountList]);

  // useEffect(() => {
  //   if(isApiReady&& api){
  //     //@ts-ignore
  //     api.rpc.swap.getTokenList().then(list => setTokenList(list.map((i: any) => ({
  //       id: Number(i.assertId),
  //       unit: i.assertInfo.token.toString(),
  //       name: i.assertInfo.chain.toString(),
  //       decimals: Number(i.assertInfo.decimals)
  //     }))))
  //   }
  // }, [isApiReady, currentAccount.address])
  //
  // let cc: any[] = []
  // useEffect(() => {
  //   if(tokenList.length> 0){
  //     tokenList.map((t: TokenItem) => (
  //     //@ts-ignore
  //       api.rpc.swap.getBalance(t.id, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY').then(balance => {
  //         setAccountBalance({
  //           ...accountBalance,
  //           [balanceType[t.id]]: {
  //             id: t.id,
  //             unit: t.unit,
  //             name: t.name,
  //             decimals: t.decimals,
  //             assetNumber: Number(balance)
  //           }
  //         })
  //       })
  //     ))
  //   }
  // }, [tokenList, currentAccount.address])
  // console.log(
  //   "aaa",
  //   isExtensionInjected,
  //   accountList,
  //   currentAccount,
  //   setCurrentAccount
  // );
  return (
    <AccountsContext.Provider
      value={{
        isExtensionInjected,
        accountList,
        currentAccount,
        setCurrentAccount,
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
};
