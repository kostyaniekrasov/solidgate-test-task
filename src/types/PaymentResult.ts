import PaymentError from './PaymentError';

interface PaymentResult {
  success: boolean;
  message: string;
  errors?: PaymentError[];
}

export default PaymentResult;
