export interface VaultAccountResponse {
  id: string;
  name: string;
  hiddenOnUI?: boolean;
  assets?: AssetResponse[];
  customerRefId?: string;
  autoFuel?: boolean;
}

export interface AssetResponse {
  id: string;
  total: string;
  /**
   * @deprecated Replaced by "total"
   */
  balance?: string;
  lockedAmount?: string;
  available?: string;
  pending?: string;
  selfStakedCPU?: string;
  selfStakedNetwork?: string;
  pendingRefundCPU?: string;
  pendingRefundNetwork?: string;
  totalStakedCPU?: string;
  totalStakedNetwork?: string;
  rewardInfo?: BalanceRewardInfo;
  blockHeight?: string;
  blockHash?: string;
  allocatedBalances?: {
    allocationId: string;
    thirdPartyAccountId?: string;
    affiliation?: VirtualAffiliation;
    virtualType?: VirtualType;
    total: string;
    available: string;
    pending?: string;
    frozen?: string;
    locked?: string;
  }[];
}

export interface BalanceRewardInfo {
  pendingRewards: string;
}

export declare enum VirtualAffiliation {
  OFF_EXCHANGE = "OFF_EXCHANGE",
  DEFAULT = "DEFAULT",
}

export declare enum VirtualType {
  OFF_EXCHANGE = "OFF_EXCHANGE",
  DEFAULT = "DEFAULT",
  OEC_FEE_BANK = "OEC_FEE_BANK",
}
