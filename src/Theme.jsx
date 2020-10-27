import React, { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeContext } from './components/contexts/ThemeContext';
import { ModalProvider } from './components/contexts/ModalContext';

const themes = {
  dark: {
    body: '#1f1f1f',
    bodyLogin: '#121212',
    background: '#121212',
    primary: '#121212',
    icons: '#FAFAFA',
    logo: '#bb86fc',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
    cardItem: '#121212',
    modal: '#1f1f1f',
    borderCardUser: '#1f1f1f',
  },
  light: {
    body: '#e9ecef',
    bodyLogin: '#e9ecef',
    background: '#201b2d',
    primary: '#FAFAFA',
    icons: '#000000',
    logo: '#bb86fc',
    text: '#2f2e41',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    cardItem: '#ffffff',
    modal: '#fafafa',
    borderCardUser: '#e9ecef',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.body};
    font-family: Poppins;
    transition: background 0.5s linear;
  }
`;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <ModalProvider>
        <GlobalStyle />
        {children}
      </ModalProvider>
    </ThemeProvider>
  );
};

export default Theme;
