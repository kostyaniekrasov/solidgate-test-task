interface PaymentError {
  field?: 'cardNumber' | 'expiryDate' | 'cvv';
  message: string;
}

export default PaymentError;
