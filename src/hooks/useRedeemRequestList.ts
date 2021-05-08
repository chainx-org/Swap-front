import { useApi } from "../hooks/useApi";
import { useContext, useEffect, useState } from "react";
import { Option, U128 } from "@polkadot/types";
import { RedeemRequest, Vault } from "../interfaces";
import { AccountId } from "@polkadot/types/interfaces";

export interface RedeemHistoryRow {
  id: number;
  requester: string;
  vaultId: string;
  amount: number;
  chainxAddr: string;
  userBtcAddr: string;
  hash: string;
  openTime: number;
  countedBlock: number;
  status: string;
}

export const useRedeemRequests = () => {
  const { api, isApiReady } = useApi();
  const [redeemRequestsList, setRedeemRequestList] = useState<RedeemHistoryRow[]>([]);

  const fetchData = async () => {
    const data = await api.query.xGatewayBitcoinV2.redeemRequests.entries<Option<RedeemRequest>, [U128]>();
    const vaults = await api.query.xGatewayBitcoinV2.vaults.entries<Option<Vault>, [AccountId]>();
    let initIssueLog = data.map(([key, value]) => {
      let request: RedeemRequest = value.unwrap();
      const [, vault] = vaults.find(([key]) => request.vault.eq(key.args[0]))!!;
      return {
        id: key.args[0].toNumber(),
        vaultId: request.vault.toString(),
        requester: request.requester.toString(),
        amount: request.amount.toNumber(),
        chainxAddr: request.requester.toString(),
        userBtcAddr: vault.unwrap().wallet.toString(),
        openTime: request.openTime.toNumber(),
        hash: "",
        countedBlock: 0,
        status: "processing"
      };
    });
    initIssueLog.sort((a, b) => a.id - b.id);
    setRedeemRequestList(initIssueLog);
  };

  useEffect(() => {
    isApiReady && fetchData();
  }, [isApiReady]);
  useEffect(() => {
    let unsubscribe: undefined | { then: () => Promise<void> };
    (async () => {
      if (isApiReady) {
        unsubscribe = api.rpc.chain.subscribeFinalizedHeads(async () => {
          fetchData();
        });
      }
    })();
    return () => {
      unsubscribe && unsubscribe.then();
    };
  }, [isApiReady]);
  return redeemRequestsList;
};
