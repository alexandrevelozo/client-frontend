import React from 'react';
import Routes from './routes';

import Theme from './Theme';
import { ThemeProvider } from './components/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Theme>
        <div className="App">
          <Routes />
        </div>
      </Theme>
    </ThemeProvider>
  );
}

export default App;
