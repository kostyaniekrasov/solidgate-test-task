import styles from './PaymentPage.module.scss';
import { OrderInfo, PaymentForm } from '@/components';

const PaymentPage = () => {
  const mockOrder = {
    info: 'Order info <= 100 char.',
    description: 'Description <= 400 char.',
    name: 'Lamel Professional Smart Skin Compact Powder',
    type: 'Пудра для обличчя ',
    trial: '5 days free',
    price: 299.99,
    afterTrial: 'then 299.99 UAN per 14 days',
  };
  return (
    <main>
      <div className={styles.pageWrapper}>
        <PaymentForm orderInfo={mockOrder} />
        <OrderInfo order={mockOrder} />
      </div>
    </main>
  );
};

export default PaymentPage;
