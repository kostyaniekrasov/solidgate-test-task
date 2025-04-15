import React, { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FormField.module.scss';
interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	id: string;
	children?: ReactNode;
}

const FormField = ({
	label,
	error,
	onChange,
	id,
	children,
	...inputProps
}: FormFieldProps) => {
	const errorVariants = {
		initial: { opacity: 0, x: -100 },
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.25, ease: 'easeOut' },
		},
		exit: {
			opacity: 0,
			x: -100,
			transition: { duration: 0.25, ease: 'easeIn' },
		},
	};

	return (
		<div className={styles.field}>
			<label htmlFor={id} className={styles.fieldLabel}>
				{label}
			</label>
			<div className={styles.fieldWrapper}>
				<input
					id={id}
					onChange={onChange}
					className={styles.fieldInput}
					aria-invalid={error ? 'true' : 'false'}
					{...inputProps}
				/>
				{children}
			</div>
			<AnimatePresence mode="wait">
				{error && (
					<motion.p
						key={`${id}-error`}
						variants={errorVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						className={styles.fieldError}
					>
						{error}
					</motion.p>
				)}
			</AnimatePresence>
		</div>
	);
};

export default React.memo(FormField);
