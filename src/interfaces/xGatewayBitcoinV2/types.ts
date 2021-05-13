// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, Text, bool, u128, u32, u8 } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';
import type { WeightPerClass } from '@polkadot/types/interfaces/system';

/** @name BlockNumberFor */
export interface BlockNumberFor extends BlockNumber {}

/** @name BtcAddress */
export interface BtcAddress extends Text {}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends u32 {}

/** @name ErrorCode */
export interface ErrorCode extends Enum {
  readonly isLiquidating: boolean;
  readonly isLiquidatingExchangeRateExpired: boolean;
  readonly isExchangeRateExpired: boolean;
}

/** @name IssueRequest */
export interface IssueRequest extends Struct {
  readonly vault: AccountId;
  readonly openTime: BlockNumber;
  readonly requester: AccountId;
  readonly btcAddress: BtcAddress;
  readonly btcAmount: Balance;
  readonly griefingCollateral: Balance;
}

/** @name PerDispatchClass */
export interface PerDispatchClass extends Struct {
  readonly normal: WeightPerClass;
  readonly operational: WeightPerClass;
  readonly mandatory: WeightPerClass;
}

/** @name RedeemRequest */
export interface RedeemRequest extends Struct {
  readonly vault: AccountId;
  readonly openTime: BlockNumber;
  readonly requester: AccountId;
  readonly btcAddress: BtcAddress;
  readonly amount: Balance;
  readonly redeemFee: Balance;
  readonly reimburse: bool;
}

/** @name RequestId */
export interface RequestId extends u128 {}

/** @name RpcVaultInfo */
export interface RpcVaultInfo extends Struct {
  readonly account: AccountId;
  readonly btcAddr: BtcAddress;
}

/** @name Status */
export interface Status extends Enum {
  readonly isRunning: boolean;
  readonly isError: boolean;
  readonly asError: ErrorCode;
  readonly isShutdown: boolean;
}

/** @name SystemVault */
export interface SystemVault extends Struct {
  readonly id: AccountId;
  readonly toBeIssuedTokens: Balance;
  readonly issuedTokens: Balance;
  readonly toBeRedeemedTokens: Balance;
}

/** @name TradingPrice */
export interface TradingPrice extends Struct {
  readonly price: u128;
  readonly decimal: u8;
}

/** @name Vault */
export interface Vault extends Struct {
  readonly id: AccountId;
  readonly toBeIssuedTokens: Balance;
  readonly issuedTokens: Balance;
  readonly toBeRedeemedTokens: Balance;
  readonly wallet: BtcAddress;
  readonly bannedUntil: BlockNumber;
  readonly status: VaultStatus;
}

/** @name VaultStatus */
export interface VaultStatus extends Enum {
  readonly isActive: boolean;
  readonly isLiquidated: boolean;
  readonly isCommittedTheft: boolean;
}

export type PHANTOM_XGATEWAYBITCOINV2 = 'xGatewayBitcoinV2';
