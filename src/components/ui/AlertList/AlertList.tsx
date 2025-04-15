import { AlertItem } from '@/types';
import { AnimatePresence } from 'framer-motion';
import { Alert } from '@/components';
import styles from './AlertList.module.scss';
import { useEffect } from 'react';

interface Props {
	alerts: AlertItem[];
	removeAlert: (id: string) => void;
}

const AlertList = ({ alerts, removeAlert }: Props) => {
	useEffect(() => {
		if (alerts.length === 0) return;

		const timer = setTimeout(() => {
			const lastAlert = alerts[alerts.length - 1];
			if (lastAlert) {
				removeAlert(lastAlert.id);
			}
		}, 5000);

		return () => clearTimeout(timer);
	}, [alerts, removeAlert]);

	return (
		<div className={styles.list}>
			<AnimatePresence>
				{alerts.map((alert) => (
					<Alert
						key={alert.id}
						alert={alert}
						onClose={() => removeAlert(alert.id)}
					/>
				))}
			</AnimatePresence>
		</div>
	);
};

export default AlertList;
