export type IPaymentData = {
  name: string;
  email: string;
  phoneNumber: string | null;
  address: string | null;
  amount: number;
  transactionId: string;
};
