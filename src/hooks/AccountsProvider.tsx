import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { ApiContext } from './ApiProvider';
import { web3AccountsSubscribe, web3Enable } from '@polkadot/extension-dapp';

export interface AccountItem{
  address: string;
  name: string;
}

export interface AccountsData {
  isExtensionInjected: boolean;
  currentAccount: AccountItem;
  accountList: AccountItem[];
  setCurrentAccount: React.Dispatch<AccountItem>;
}

export const AccountsContext = createContext<AccountsData>({} as AccountsData);

export const AccountsProvider: FC = ({children}) => {
  const {isApiReady} = useContext(ApiContext)
  const [accountList, setAccountList] = useState<AccountItem[]>([])
  const [currentAccount, setCurrentAccount] = useState<AccountItem>({
    address: '',
    name: '',
  })
  const [isExtensionInjected, setIsExtensionInjected] = useState<boolean>(false)

  const getAccountList = async () => {
    const extensions = await web3Enable('swap');
    if (extensions.length === 0) {
      return;
    }
    setIsExtensionInjected(true)
    const account$ = await web3AccountsSubscribe(accounts => {
      const accountsList = accounts.map(acc => ({
        address: acc.address,
        name: acc.meta.name
      }))
      setAccountList(accountsList as AccountItem[])
    });
  }

  useEffect(() => {
    getAccountList()
  }, [isApiReady])

  useEffect(() => {
    accountList.length >= 1? setCurrentAccount(accountList[0]) : setCurrentAccount({
      address: '',
      name: '',
    })

  }, [accountList])

  return (
    <AccountsContext.Provider value={{
      isExtensionInjected,
      accountList,
      currentAccount,
      setCurrentAccount
    }}>
      {children}
    </AccountsContext.Provider>
  );
};
