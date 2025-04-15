import './App.css';
import { AlertProvider } from './context/AlertContext';
import { PaymentPage } from './pages';

function App() {
	return (
		<div>
			<AlertProvider>
				<PaymentPage />
			</AlertProvider>
		</div>
	);
}

export default App;
