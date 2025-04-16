import './App.css';
import { Header } from './components';
import { AlertProvider } from './context/AlertContext';
import { PaymentPage } from './pages';

function App() {
  return (
    <div>
      <AlertProvider>
        <Header />
        <PaymentPage />
      </AlertProvider>
    </div>
  );
}

export default App;
