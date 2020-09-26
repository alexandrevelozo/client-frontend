import React, { useState, createContext } from 'react';
// import { lightTheme, darkTheme } from '../../theme';

export const ThemeContext = createContext({
  toggleTheme: () => {},
  theme: 'light' | 'dark',
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// O provider vai fazer o uso do contexto, e a nossa
// aplicacao fica todo contida no provider
