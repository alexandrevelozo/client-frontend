import React from 'react';
import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';
// import { ThemeProvider } from 'styled-components';
import { ThemeProvider } from './components/contexts/ThemeContext';

// import { lightTheme, darkTheme } from './theme';

function App() {
  return (
    <ThemeProvider>
      {/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> */}
      <div className="App">
        <GlobalStyles />
        <Routes />
      </div>
      {/* </ThemeProvider> */}
    </ThemeProvider>
  );
}

export default App;
