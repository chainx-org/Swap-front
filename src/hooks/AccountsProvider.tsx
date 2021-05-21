import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiContext } from "./ApiProvider";
import { web3AccountsSubscribe, web3Enable } from "@polkadot/extension-dapp";
import Identicon from "@polkadot/react-identicon";

export interface AccountItem {
  address: string;
  name: string;
  theme: string;
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
    theme: "polkadot",
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
          theme: "polkadot",
        });
  }, [accountList]);
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
