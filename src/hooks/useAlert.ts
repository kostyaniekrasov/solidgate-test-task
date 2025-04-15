import { AlertContext } from '@/context/AlertContext';
import { useContext } from 'react';

const useAlert = () => {
	const context = useContext(AlertContext);
	if (!context) throw new Error('useAlert must be used within AlertProvider');
	return context;
};

export default useAlert;
