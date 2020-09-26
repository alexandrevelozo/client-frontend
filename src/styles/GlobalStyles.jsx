import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {

    
    font-family: Poppins;
    transition: all 0.25s linear;
  }
`;
// color: ${({ theme }) => theme.text};
// background: ${({ themes }) => themes.body};
