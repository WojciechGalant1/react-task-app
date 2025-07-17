import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [alertKey, setAlertKey] = useState(0);
  const timeoutRef = useRef(null);

  const showAlert = useCallback((msg) => {
    // Anuluj poprzedni timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setMessage(msg);
    setAlertKey(prev => prev + 1); // unikalny key = wymuszony rerender
    setVisible(true);

    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      timeoutRef.current = null;
    }, 4000);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {visible && (
        <div className="alert" key={alertKey}>
          {message}
          <div className="progress-bar" />
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
