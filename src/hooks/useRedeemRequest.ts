import { AccountId, Balance, BlockNumber } from "@polkadot/types/interfaces";
import { createContext, useContext } from "react";
import type { BtcAddress, IssueRequest, RequestId } from "../interfaces";

export interface RedeemRequestRow {
  readonly id: RequestId;
  readonly vault: AccountId;
  readonly openTime: BlockNumber;
  readonly requester: AccountId;
  readonly btcAddress: BtcAddress;
  readonly amount: Balance;
}

interface RedeemRequestsContextProps {
  requests: RedeemRequestRow[];
}

export const RedeemRequestsContext = createContext(
  ({} as unknown) as RedeemRequestsContextProps
);
export const useRedeemRequests = () => useContext(RedeemRequestsContext);
