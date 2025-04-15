import { PaymentForm } from '@/components';

const PaymentPage = () => {
	const mockFormData = {
		trial: '5 days free',
		price: 299.99,
		afterTrial: 'then 299.99 UAN per 14 days',
	};
	return (
		<main>
			<PaymentForm orderInfo={mockFormData} />
		</main>
	);
};

export default PaymentPage;
