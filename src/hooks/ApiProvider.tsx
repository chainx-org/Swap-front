import React, { useEffect, useState } from 'react';
import { WsProvider } from '@polkadot/rpc-provider';
import * as definitions from '../interfaces/definitions';
import { ApiPromise } from '@polkadot/api';
import { notification } from 'antd';
import { web3AccountsSubscribe, web3Enable } from '@polkadot/extension-dapp';

interface ApiProps {
  isApiReady: boolean;
  accounts: AccountItem[];
  api: ApiPromise | null;
}

export const ApiContext: React.Context<ApiProps> = React.createContext({} as unknown as ApiProps);

interface Props {
  children: React.ReactNode;
  url?: string;
}

interface AccountItem{
  address: string;
  name: string;
}

function ApiProvider({children, url}: Props): React.ReactElement<Props> {
  const [isApiReady, setApiReady] = useState(false);
  const [accounts, setAccounts] = useState<AccountItem[]>([])
  const [api, setApi ] = useState<ApiPromise | null>(null)

  const apiInit = (): void => {
    const types = Object.values(definitions).reduce(
      (res, {types}) => ({...res, ...types}),
      {}
    );
    notification.warn({message: 'Wait ws connecting...'});
    const provider = new WsProvider(url);
    const api = new ApiPromise({provider, types});
    api.on('error', (err) => {
        notification.error({
          message: `Cannot connect to ws endpoint. `
        });
      }
    );
    api.on('disconnected', () => setApiReady(false));
    api.on('ready', () => {
      setApiReady(true);
      setApi(api)
      notification.info({message: 'Endpoint connected.'});
      getAccountList()
      //@ts-ignore
      window.api = api
    });
  };


  const getAccountList = async () => {
    const extensions = await web3Enable('swap');
    if (extensions.length === 0) {
      return;
    }
    const account$ = await web3AccountsSubscribe(accounts => {
      const accountsList = accounts.map(acc => ({
        address: acc.address,
        name: acc.meta.name
      }))
      setAccounts(accountsList as AccountItem[])
    });
  }

  useEffect(() => {
    apiInit();
  }, []);


  return (
    <ApiContext.Provider value={{
      isApiReady,
      accounts,
      api
    }}>
      {children}
    </ApiContext.Provider>
  );
}

export default React.memo(ApiProvider);
