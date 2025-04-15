import { Order } from '@/types';
import { ApplePayButton } from '../ApplePayButton';
import styles from './PaymentForm.module.scss';
import { InfoIcon } from '@/assets';
import { Tooltip } from 'react-tooltip';

interface Props {
	orderInfo: Pick<Order, 'trial' | 'price' | 'afterTrial'>;
}

const PaymentForm = ({ orderInfo }: Props) => {
	const { trial, price, afterTrial } = orderInfo;
	return (
		<form className={styles.paymentForm}>
			<div className={styles.paymentFormTrialBox}>
				<h2 className={styles.paymentFormTrialBoxTrial}>{trial}</h2>
				<p className={styles.paymentFormAfterTrial}>{afterTrial}</p>
			</div>

			<div className={styles.paymentFormAppleButton}>
				<ApplePayButton />
			</div>

			<div className={styles.paymentFormDivider}>or pay with card</div>

			<div className={styles.paymentFormFields}>
				<div className={styles.paymentFormField}>
					<label htmlFor="cardNumber" className={styles.paymentFormFieldLabel}>
						Card Number
					</label>

					<input
						type="text"
						id="cardNumber"
						name="cardNumber"
						placeholder="1234 1234 1234 1234"
						className={styles.paymentFormFieldInput}
					/>
				</div>

				<div className={styles.paymentFormRow}>
					<div className={styles.paymentFormField}>
						<label htmlFor="expiry" className={styles.paymentFormFieldLabel}>
							Expiration Date
						</label>

						<input
							type="text"
							id="expiry"
							name="expiry"
							placeholder="MM/YY"
							className={styles.paymentFormFieldInput}
						/>
					</div>

					<div className={styles.paymentFormField}>
						<label htmlFor="cvc" className={styles.paymentFormFieldLabel}>
							CVC
						</label>

						<div className={styles.paymentFormCvcWrapper}>
							<input
								type="password"
								id="cvc"
								name="cvc"
								placeholder="•••"
								className={styles.paymentFormFieldInput}
							/>

							<InfoIcon
								data-tooltip-id="my-tooltip"
								data-tooltip-content="The 3-digit code on the back of your card."
								className={styles.paymentFormCvcWrapperIcon}
							/>
						</div>
					</div>
				</div>
			</div>

			<button
				className={styles.paymentFormPayButton}
			>{`Pay ${price} UAH`}</button>
			<Tooltip id="my-tooltip" />

			<p className={styles.paymentFormDescription}>
				You'll have your{' '}
				<span className={styles.paymentFormDescriptionStrong}>
					Plan Pro during 1 year
				</span>
				. After this period of time, your plan will be{' '}
				<span className={styles.paymentFormDescriptionStrong}>
					automatically renewed
				</span>{' '}
				with its original price without any discounts applied.
			</p>
		</form>
	);
};

export default PaymentForm;
