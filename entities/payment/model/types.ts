export type Payment = {
  id: string;
  fiatAmount: string;
  assetAmount: string;
  assetPrice: string;
  currency: string;
  assetId: string;
  address: string;
  merchantId: string;
  status: string;
  refId: string;
  description: string | null;
  metadata: Record<string, any> | null;
  createdAt: Date;
};

export type GetPaymentResponse = Payment & {
  isExpired: boolean;
  expiredAt: Date;
};
