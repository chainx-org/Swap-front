import {useApi} from './useApi'
import { AccountInfo } from "@polkadot/types/interfaces";
import { useEffect, useState} from "react";

export function useAccountInfo(account: string): AccountInfo | null {
    const [accountInfo, setAccountInfo] = useState<AccountInfo | null>(null);
    const { api, isApiReady } = useApi();
  
    useEffect(() => {
      const fetchData = async () => {
        if(account){
          const info = await api.query.system.account(account);
          setAccountInfo(info);
        }else{
          return
        }
      };
  
      if (isApiReady) {
        fetchData();
      }
    }, [account, isApiReady]);
  
    useEffect(() => {
      if (isApiReady) {
        let unsubscribe = api.rpc.chain.subscribeFinalizedHeads(async header => {
          if(account){
            const info = await api.query.system.account(account);
            setAccountInfo(info);
          }else{
            return
          }
        });
  
        return () => {
          (async () => await unsubscribe)();
        };
      }
      return () => {};
    }, [account, isApiReady]);
  
    return accountInfo;
  }