import { CardDetails, PaymentResult } from '@/types';

const processPayment = async (
  cardDetails: CardDetails,
): Promise<PaymentResult> => {
  //for loading simulation
  await new Promise((resolve) => setTimeout(resolve, 2000));

  //for error simulation
  if (cardDetails.cardNumber.endsWith('0000')) {
    return {
      success: false,
      message: 'Server error: transaction declined.',
    };
  }

  return { success: true, message: 'Payment successful!' };
};

export default processPayment;
