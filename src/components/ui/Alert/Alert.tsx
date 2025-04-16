import styles from './Alert.module.scss';
import { alertVariants } from '@/constants';
import { AlertItem } from '@/types';
import { motion } from 'framer-motion';
import { CheckCircle, X, XCircle } from 'lucide-react';
import { useCallback } from 'react';

interface Props {
  alert: AlertItem;
  onClose: () => void;
}

const Alert = ({ alert, onClose }: Props) => {
  const { type, message, id } = alert;

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <motion.div
      key={id}
      className={`${styles.alert} ${styles[type]}`}
      variants={alertVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
      whileHover={{
        filter: 'brightness(114%)',
        transition: { duration: 0.08, ease: 'easeIn' },
      }}
    >
      {type === 'success' ? (
        <CheckCircle className={styles.icon} />
      ) : (
        <XCircle className={styles.icon} />
      )}
      <span>{message}</span>
      <button
        type="button"
        onClick={handleClose}
        className={styles.closeBtn}
      >
        <X className={styles.icon} />
      </button>
    </motion.div>
  );
};

export default Alert;
