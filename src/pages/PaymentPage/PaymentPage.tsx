import styles from './PaymentPage.module.scss';
import { OrderInfo, PaymentForm } from '@/components';
import { mockOrder } from '@/constants';

const PaymentPage = () => {
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
