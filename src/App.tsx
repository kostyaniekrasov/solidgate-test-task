import './App.css';
import { Footer, Header } from './components';
import { AlertProvider } from './context/AlertContext';
import { PaymentPage } from './pages';

function App() {
  return (
    <div className="App">
      <AlertProvider>
        <Header />
        <PaymentPage />
        <Footer />
      </AlertProvider>
    </div>
  );
}

export default App;
