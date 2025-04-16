import styles from './OrderInfo.module.scss';
import { Order } from '@/types';

interface Props {
  order: Order;
}
const OrderInfo = ({ order }: Props) => {
  return (
    <section className={styles.order}>
      <h2 className={styles.orderInfo}>{order.info}</h2>

      <div className={styles.orderWrapper}>
        <p className={styles.orderDescription}>{order.description}</p>

        <div className={styles.orderDivider} />

        <div>
          <h4 className={styles.orderName}>{order.name}</h4>
          <p className={styles.orderType}>{order.type}</p>
        </div>

        <div className={styles.orderDivider} />

        <div className={styles.orderTextRight}>
          <h3 className={styles.orderTrial}>{order.trial}</h3>
          <p className={styles.orderAfterTrial}>{order.afterTrial}</p>
        </div>
      </div>
    </section>
  );
};

export default OrderInfo;
