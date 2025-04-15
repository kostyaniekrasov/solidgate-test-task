import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import styles from './Alert.module.scss';
import { AlertItem } from '@/types';

interface Props {
	alert: AlertItem;
	onClose: () => void;
}

const alertVariants = {
	initial: { opacity: 0, x: 100, y: 0 },
	animate: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.3, ease: 'easeOut' },
	},
	exit: {
		opacity: 0,
		x: 100,
		transition: { duration: 0.3, ease: 'easeIn' },
	},
};

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
			<button type="button" onClick={handleClose} className={styles.closeBtn}>
				<X className={styles.icon} />
			</button>
		</motion.div>
	);
};

export default Alert;
