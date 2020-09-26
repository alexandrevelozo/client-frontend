import React from 'react';

import { Container, IconSwitchTheme } from './styles';

const ThemeSwitcher = ({ toggleTheme }) => {
  return (
    <Container>
      <IconSwitchTheme onClick={toggleTheme} />
    </Container>
  );
};

export default ThemeSwitcher;
