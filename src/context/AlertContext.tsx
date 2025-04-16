import { AlertItem } from '@/types';
import {
  createContext,
  lazy,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface AlertContextType {
  alerts: AlertItem[];
  addAlert: (type: 'success' | 'error', message: string) => void;
  removeAlert: (id: string) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);
const AlertList = lazy(() => import('@/components/ui/AlertList/AlertList'));

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  const addAlert = useCallback((type: 'success' | 'error', message: string) => {
    setAlerts((prev) => [...prev, { id: crypto.randomUUID(), type, message }]);
  }, []);

  const removeAlert = useCallback((id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({ alerts, addAlert, removeAlert }),
    [alerts, addAlert, removeAlert],
  );

  return (
    <AlertContext.Provider value={contextValue}>
      {children}

      <AlertList
        alerts={alerts}
        removeAlert={removeAlert}
      />
    </AlertContext.Provider>
  );
};

export { AlertContext };
