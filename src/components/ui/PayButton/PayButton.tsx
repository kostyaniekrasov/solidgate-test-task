import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from '@/components';
import styles from './PayButton.module.scss';

interface Props {
	price: number;
	isLoading: boolean;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	onClick?: () => void;
}

const PayButton = ({ price, isLoading, type, onClick, disabled }: Props) => (
	<motion.button
		type={type}
		className={styles.payButton}
		disabled={disabled}
		whileHover={{
			filter: 'brightness(104%)', // +4 hsl
			y: -2,
			transition: { duration: 0.08, ease: 'easeIn' },
		}}
		whileTap={{
			y: 4,
			filter: 'brightness(92%)', // -8 hsl
			transition: { duration: 0.08, ease: 'easeIn' },
		}}
		animate={{
			y: isLoading ? -2 : 0,
			filter: isLoading ? 'brightness(104%)' : 'brightness(100%)',
			transition: {
				duration: 0.12,
				ease: 'easeOut',
			},
		}}
		layout
		onClick={onClick}
	>
		<AnimatePresence mode="wait">
			{isLoading ? (
				<div className={styles.payButtonProcessingWrapper}>
					<Loader />

					<motion.span
						key="processing"
						initial={{
							opacity: 0,
							y: 16,
						}}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -16 }}
						transition={{ duration: 0.16 }}
					>
						Processing payment
					</motion.span>
				</div>
			) : (
				<motion.span
					key="pay"
					initial={{
						opacity: 0,
						y: 16,
					}}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -16 }}
					transition={{ duration: 0.16 }}
				>{`Pay ${price} UAH`}</motion.span>
			)}
		</AnimatePresence>
	</motion.button>
);

export default PayButton;
