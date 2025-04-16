import styles from './ApplePayButton.module.scss';
import { ApplePayIcon } from '@/assets';

interface Props {
  onClick: () => void;
}

const ApplePayButton = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      className={styles.applePayButton}
      onClick={onClick}
    >
      <ApplePayIcon />
    </button>
  );
};

export default ApplePayButton;
