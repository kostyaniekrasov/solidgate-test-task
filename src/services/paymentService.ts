import { CardDetails, PaymentError, PaymentResult } from '@/types';

const processPayment = async (
	cardDetails: CardDetails
): Promise<PaymentResult> => {
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const errors: PaymentError[] = [];

	if (!cardDetails.cardNumber) {
		errors.push({ field: 'cardNumber', message: `Номер картки обово'язковий` });
	} else if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardDetails.cardNumber)) {
		errors.push({
			field: 'cardNumber',
			message: 'Номер картки має бути у форматі 1234 1234 1234 1234.',
		});
	}

	if (!cardDetails.expiryDate) {
		errors.push({
			field: 'expiryDate',
			message: 'Дата закінчення обов’язкова.',
		});
	} else if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiryDate)) {
		errors.push({
			field: 'expiryDate',
			message: 'Дата має бути у форматі MM/YY.',
		});
	}

	if (!cardDetails.cvv) {
		errors.push({ field: 'cvv', message: 'CVV обов’язковий.' });
	} else if (!/^\d{3}$/.test(cardDetails.cvv)) {
		errors.push({ field: 'cvv', message: 'CVV має складатися з 3 цифр.' });
	}

	if (errors.length > 0) {
		return { success: false, errors };
	}

	return { success: true, message: 'Оплата успішна!' };
};

export default processPayment;
