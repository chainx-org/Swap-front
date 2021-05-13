// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Enum, Option, Struct, Text, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { Order } from '@polkadot/types/interfaces/parachains';
import type { AccountId, Balance, BlockNumber, H256 } from '@polkadot/types/interfaces/runtime';
import type { VoteWeight } from '@polkadot/types/interfaces/staking';
import type { BtcAddress } from '../xGatewayBitcoinV2/types';

/** @name AddrStr */
export interface AddrStr extends Text {}

/** @name Amount */
export interface Amount extends i128 {}

/** @name AmountOf */
export interface AmountOf extends Amount {}

/** @name AssetId */
export interface AssetId extends u32 {}

/** @name AssetInfo */
export interface AssetInfo extends Struct {
  readonly token: Text;
  readonly tokenName: Text;
  readonly chain: Chain;
  readonly decimals: Decimals;
  readonly desc: Text;
}

/** @name AssetLedger */
export interface AssetLedger extends Struct {
  readonly lastTotalMiningWeight: MiningWeight;
  readonly lastTotalMiningWeightUpdate: BlockNumber;
}

/** @name AssetRestriction */
export interface AssetRestriction extends Enum {
  readonly isMove: boolean;
  readonly isTransfer: boolean;
  readonly isDeposit: boolean;
  readonly isWithdraw: boolean;
  readonly isDestroyWithdrawal: boolean;
  readonly isDestroyFree: boolean;
}

/** @name AssetRestrictions */
export interface AssetRestrictions extends Struct {
  readonly bits: u32;
}

/** @name AssetType */
export interface AssetType extends Enum {
  readonly isUsable: boolean;
  readonly isLocked: boolean;
  readonly isReserved: boolean;
  readonly isReservedWithdrawal: boolean;
  readonly isReservedDexSpot: boolean;
}

/** @name BondRequirement */
export interface BondRequirement extends Struct {
  readonly selfBonded: Balance;
  readonly total: Balance;
}

/** @name BtcDepositCache */
export interface BtcDepositCache extends Struct {
  readonly txid: H256;
  readonly balance: u64;
}

/** @name BtcHeader */
export interface BtcHeader extends Bytes {}

/** @name BtcHeaderIndex */
export interface BtcHeaderIndex extends Struct {
  readonly hash: H256;
  readonly height: u32;
}

/** @name BtcHeaderInfo */
export interface BtcHeaderInfo extends Struct {
  readonly header: BtcHeader;
  readonly height: u32;
}

/** @name BtcNetwork */
export interface BtcNetwork extends Enum {
  readonly isMainnet: boolean;
  readonly isTestnet: boolean;
}

/** @name BtcParams */
export interface BtcParams extends Struct {
  readonly maxBits: u32;
  readonly blockMaxFuture: u32;
  readonly targetTimespanSeconds: u32;
  readonly targetSpacingSeconds: u32;
  readonly retargetingFactor: u32;
  readonly retargetingInterval: u32;
  readonly minTimespan: u32;
  readonly maxTimespan: u32;
}

/** @name BtcPartialMerkleTree */
export interface BtcPartialMerkleTree extends Bytes {}

/** @name BtcRelayedTxInfo */
export interface BtcRelayedTxInfo extends Struct {
  readonly blockHash: H256;
  readonly merkleProof: BtcPartialMerkleTree;
}

/** @name BtcTransaction */
export interface BtcTransaction extends Bytes {}

/** @name BtcTrusteeAddrInfo */
export interface BtcTrusteeAddrInfo extends Struct {
  readonly addr: BtcAddress;
  readonly redeemScript: Bytes;
}

/** @name BtcTrusteeIntentionProps */
export interface BtcTrusteeIntentionProps extends Struct {
  readonly about: Text;
  readonly hotEntity: BtcTrusteeType;
  readonly coldEntity: BtcTrusteeType;
}

/** @name BtcTrusteeSessionInfo */
export interface BtcTrusteeSessionInfo extends Struct {
  readonly trusteeList: Vec<AccountId>;
  readonly threshold: u16;
  readonly hotAddress: BtcTrusteeAddrInfo;
  readonly coldAddress: BtcTrusteeAddrInfo;
}

/** @name BtcTrusteeType */
export interface BtcTrusteeType extends Bytes {}

/** @name BtcTxResult */
export interface BtcTxResult extends Enum {
  readonly isSuccess: boolean;
  readonly isFailure: boolean;
}

/** @name BtcTxState */
export interface BtcTxState extends Struct {
  readonly txType: BtcTxType;
  readonly result: BtcTxResult;
}

/** @name BtcTxType */
export interface BtcTxType extends Enum {
  readonly isWithdrawal: boolean;
  readonly isDeposit: boolean;
  readonly isHotAndCold: boolean;
  readonly isTrusteeTransition: boolean;
  readonly isIrrelevance: boolean;
}

/** @name BtcTxVerifier */
export interface BtcTxVerifier extends Enum {
  readonly isRecover: boolean;
  readonly isRuntimeInterface: boolean;
}

/** @name BtcVoteResult */
export interface BtcVoteResult extends Enum {
  readonly isUnfinish: boolean;
  readonly isFinish: boolean;
}

/** @name BtcWithdrawalProposal */
export interface BtcWithdrawalProposal extends Struct {
  readonly sigState: BtcVoteResult;
  readonly withdrawalIdList: Vec<u32>;
  readonly tx: BtcTransaction;
  readonly trusteeList: Vec<ITuple<[AccountId, bool]>>;
}

/** @name Chain */
export interface Chain extends Enum {
  readonly isChainX: boolean;
  readonly isBitcoin: boolean;
  readonly isEthereum: boolean;
  readonly isPolkadot: boolean;
}

/** @name ChainAddress */
export interface ChainAddress extends Bytes {}

/** @name ClaimRestriction */
export interface ClaimRestriction extends Struct {
  readonly stakingRequirement: StakingRequirement;
  readonly frequencyLimit: BlockNumber;
}

/** @name CurrencyId */
export interface CurrencyId extends AssetId {}

/** @name CurrencyPair */
export interface CurrencyPair extends Struct {
  readonly base: AssetId;
  readonly quote: AssetId;
}

/** @name Decimals */
export interface Decimals extends u8 {}

/** @name Depth */
export interface Depth extends Struct {
  readonly asks: Vec<ITuple<[RpcPrice, RpcBalance]>>;
  readonly bids: Vec<ITuple<[RpcPrice, RpcBalance]>>;
}

/** @name Desc */
export interface Desc extends Text {}

/** @name FixedAssetPower */
export interface FixedAssetPower extends u32 {}

/** @name FullPairInfo */
export interface FullPairInfo extends Struct {
  readonly baseCurrency: AssetId;
  readonly highestBid: RpcPrice;
  readonly id: TradingPairId;
  readonly latestPrice: RpcPrice;
  readonly latestPriceUpdatedAt: BlockNumber;
  readonly lowestAsk: RpcPrice;
  readonly maxValidBid: RpcPrice;
  readonly minValidAsk: RpcPrice;
  readonly pipDecimals: u32;
  readonly quoteCurrency: AssetId;
  readonly tickDecimals: u32;
  readonly tradable: bool;
}

/** @name GenericTrusteeIntentionProps */
export interface GenericTrusteeIntentionProps extends Struct {
  readonly about: Text;
  readonly hotEntity: Bytes;
  readonly coldEntity: Bytes;
}

/** @name GenericTrusteeSessionInfo */
export interface GenericTrusteeSessionInfo extends Struct {
  readonly trusteeList: Vec<AccountId>;
  readonly threshold: u16;
  readonly hotAddress: Bytes;
  readonly coldAddress: Bytes;
}

/** @name GlobalDistribution */
export interface GlobalDistribution extends Struct {
  readonly treasury: u32;
  readonly mining: u32;
}

/** @name Handicap */
export interface Handicap extends Struct {
  readonly highestBid: Price;
  readonly lowestAsk: Price;
}

/** @name HandicapInfo */
export interface HandicapInfo extends Handicap {}

/** @name LockedType */
export interface LockedType extends Enum {
  readonly isBonded: boolean;
  readonly isBondedWithdrawal: boolean;
}

/** @name Memo */
export interface Memo extends Text {}

/** @name MinerLedger */
export interface MinerLedger extends Struct {
  readonly lastMiningWeight: MiningWeight;
  readonly lastMiningWeightUpdate: BlockNumber;
  readonly lastClaim: Option<BlockNumber>;
}

/** @name MiningAssetInfo */
export interface MiningAssetInfo extends Struct {
  readonly assetId: AssetId;
  readonly miningPower: FixedAssetPower;
  readonly rewardPot: AccountId;
  readonly rewardPotBalance: RpcBalance;
  readonly lastTotalMiningWeight: RpcMiningWeight;
  readonly lastTotalMiningWeightUpdate: BlockNumber;
}

/** @name MiningDistribution */
export interface MiningDistribution extends Struct {
  readonly asset: u32;
  readonly staking: u32;
}

/** @name MiningWeight */
export interface MiningWeight extends u128 {}

/** @name NetworkType */
export interface NetworkType extends Enum {
  readonly isMainnet: boolean;
  readonly isTestnet: boolean;
}

/** @name NominatorLedger */
export interface NominatorLedger extends Struct {
  readonly nomination: Balance;
  readonly lastVoteWeight: VoteWeight;
  readonly lastVoteWeightUpdate: BlockNumber;
  readonly unbondedChunks: Vec<Unbonded>;
}

/** @name OrderExecutedInfo */
export interface OrderExecutedInfo extends Struct {
  readonly tradingHistoryIdx: TradingHistoryIndex;
  readonly pairId: TradingPairId;
  readonly price: Price;
  readonly maker: AccountId;
  readonly taker: AccountId;
  readonly makerOrderId: OrderId;
  readonly takerOrderId: OrderId;
  readonly turnover: Balance;
  readonly executedAt: BlockNumber;
}

/** @name OrderId */
export interface OrderId extends u64 {}

/** @name OrderInfo */
export interface OrderInfo extends Order {}

/** @name OrderProperty */
export interface OrderProperty extends Struct {
  readonly id: OrderId;
  readonly side: Side;
  readonly price: Price;
  readonly amount: Amount;
  readonly pairId: TradingPairId;
  readonly submitter: AccountId;
  readonly orderType: OrderType;
  readonly createdAt: BlockNumber;
}

/** @name OrderStatus */
export interface OrderStatus extends Enum {
  readonly isCreated: boolean;
  readonly isPartialFill: boolean;
  readonly isFilled: boolean;
  readonly isPartialFillAndCanceled: boolean;
  readonly isCanceled: boolean;
}

/** @name OrderType */
export interface OrderType extends Enum {
  readonly isLimit: boolean;
  readonly isMarket: boolean;
}

/** @name Page */
export interface Page extends Struct {
  readonly pageIndex: u32;
  readonly pageSize: u32;
  readonly data: Vec<RpcOrder>;
}

/** @name Price */
export interface Price extends u128 {}

/** @name PriceFluctuation */
export interface PriceFluctuation extends u32 {}

/** @name ReferralId */
export interface ReferralId extends Text {}

/** @name RpcBalance */
export interface RpcBalance extends Text {}

/** @name RpcFeeDetails */
export interface RpcFeeDetails extends Struct {
  readonly inclusionFee: Option<RpcInclusionFee>;
  readonly tip: RpcBalance;
  readonly extraFee: RpcBalance;
  readonly finalFee: RpcBalance;
}

/** @name RpcInclusionFee */
export interface RpcInclusionFee extends Struct {
  readonly baseFee: RpcBalance;
  readonly lenFee: RpcBalance;
  readonly adjustedWeightFee: RpcBalance;
}

/** @name RpcMiningDividendInfo */
export interface RpcMiningDividendInfo extends Struct {
  readonly own: RpcBalance;
  readonly other: RpcBalance;
  readonly insufficientStake: RpcBalance;
}

/** @name RpcMiningWeight */
export interface RpcMiningWeight extends Text {}

/** @name RpcOrder */
export interface RpcOrder extends Struct {
  readonly id: OrderId;
  readonly side: Side;
  readonly price: RpcPrice;
  readonly amount: RpcBalance;
  readonly pairId: TradingPairId;
  readonly submitter: AccountId;
  readonly orderType: OrderType;
  readonly createdAt: BlockNumber;
  readonly status: OrderStatus;
  readonly remaining: RpcBalance;
  readonly executedIndices: Vec<TradingHistoryIndex>;
  readonly alreadyFilled: RpcBalance;
  readonly reservedBalance: RpcBalance;
  readonly lastUpdateAt: BlockNumber;
}

/** @name RpcPrice */
export interface RpcPrice extends Text {}

/** @name RpcTotalAssetInfo */
export interface RpcTotalAssetInfo extends Struct {
  readonly info: AssetInfo;
  readonly balance: BTreeMap<AssetType, RpcBalance>;
  readonly isOnline: bool;
  readonly restrictions: AssetRestrictions;
}

/** @name RpcVoteWeight */
export interface RpcVoteWeight extends Text {}

/** @name RpcWithdrawalRecord */
export interface RpcWithdrawalRecord extends Struct {
  readonly assetId: AssetId;
  readonly applicant: AccountId;
  readonly balance: RpcBalance;
  readonly addr: Text;
  readonly ext: Text;
  readonly height: BlockNumber;
  readonly state: WithdrawalState;
}

/** @name Side */
export interface Side extends Enum {
  readonly isBuy: boolean;
  readonly isSell: boolean;
}

/** @name StakingRequirement */
export interface StakingRequirement extends u32 {}

/** @name String */
export interface String extends Text {}

/** @name Token */
export interface Token extends Text {}

/** @name TokenInfo */
export interface TokenInfo extends Struct {
  readonly assert_id: AssetId;
  readonly assert_info: AssetInfo;
}

/** @name TotalAssetInfo */
export interface TotalAssetInfo extends Struct {
  readonly info: AssetInfo;
  readonly balance: BTreeMap<AssetType, Balance>;
  readonly isOnline: bool;
  readonly restrictions: AssetRestrictions;
}

/** @name TradingHistoryIndex */
export interface TradingHistoryIndex extends u64 {}

/** @name TradingPairId */
export interface TradingPairId extends u32 {}

/** @name TradingPairInfo */
export interface TradingPairInfo extends Struct {
  readonly lastestPrice: Price;
  readonly lastUpdated: BlockNumber;
}

/** @name TradingPairProfile */
export interface TradingPairProfile extends Struct {
  readonly id: TradingPairId;
  readonly currencyPair: CurrencyPair;
  readonly pipDecimals: u32;
  readonly tickDecimals: u32;
  readonly tradable: bool;
}

/** @name TrusteeInfoConfig */
export interface TrusteeInfoConfig extends Struct {
  readonly minTrusteeCount: u32;
  readonly maxTrusteeCount: u32;
}

/** @name Unbonded */
export interface Unbonded extends Struct {
  readonly value: Balance;
  readonly lockedUntil: BlockNumber;
}

/** @name UnbondedIndex */
export interface UnbondedIndex extends u32 {}

/** @name ValidatorInfo */
export interface ValidatorInfo extends Struct {
  readonly account: AccountId;
  readonly registeredAt: BlockNumber;
  readonly isChilled: bool;
  readonly lastChilled: Option<BlockNumber>;
  readonly totalNomination: RpcBalance;
  readonly lastTotalVoteWeight: RpcVoteWeight;
  readonly lastTotalVoteWeightUpdate: BlockNumber;
  readonly isValidating: bool;
  readonly selfBonded: RpcBalance;
  readonly referralId: Text;
  readonly rewardPotAccount: AccountId;
  readonly rewardPotBalance: RpcBalance;
}

/** @name ValidatorLedger */
export interface ValidatorLedger extends Struct {
  readonly totalNomination: Balance;
  readonly lastTotalVoteWeight: VoteWeight;
  readonly lastTotalVoteWeightUpdate: BlockNumber;
}

/** @name ValidatorProfile */
export interface ValidatorProfile extends Struct {
  readonly registeredAt: BlockNumber;
  readonly isChilled: bool;
  readonly lastChilled: Option<BlockNumber>;
  readonly referralId: ReferralId;
}

/** @name WithdrawalLimit */
export interface WithdrawalLimit extends Struct {
  readonly minimalWithdrawal: Balance;
  readonly fee: Balance;
}

/** @name WithdrawalRecord */
export interface WithdrawalRecord extends Struct {
  readonly assetId: AssetId;
  readonly applicant: AccountId;
  readonly balance: Balance;
  readonly addr: AddrStr;
  readonly ext: Memo;
  readonly height: BlockNumber;
}

/** @name WithdrawalRecordId */
export interface WithdrawalRecordId extends u32 {}

/** @name WithdrawalRecordOf */
export interface WithdrawalRecordOf extends WithdrawalRecord {}

/** @name WithdrawalState */
export interface WithdrawalState extends Enum {
  readonly isApplying: boolean;
  readonly isProcessing: boolean;
  readonly isNormalFinish: boolean;
  readonly isRootFinish: boolean;
  readonly isNormalCancel: boolean;
  readonly isRootCancel: boolean;
}

export type PHANTOM_CHAINX = 'chainx';
