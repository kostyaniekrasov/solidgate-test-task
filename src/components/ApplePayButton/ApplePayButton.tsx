import styles from './ApplePayButton.module.scss';

import { ApplePayIcon } from '@/assets';

const ApplePayButton = () => {
	return (
		<button type="button" className={styles.applePayButton}>
			<ApplePayIcon />
		</button>
	);
};

export default ApplePayButton;
