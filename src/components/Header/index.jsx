import React, { useContext } from 'react';

import IconDashboard from '../../components/IconDashboard';
import IconNotifications from '../../components/IconNotifications';
import IconConfig from '../../components/IconConfig';

import { ThemeContext } from '../contexts/ThemeContext';
import { lightTheme, darkTheme } from '../../theme';

import {
  Container,
  Wrapper,
  SessionHeader,
  HeaderItems,
  IconSwitchTheme,
} from './styles';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <Wrapper>
        <SessionHeader>
          <IconDashboard />
          <h1>Dashboard Sistema</h1>
        </SessionHeader>

        <HeaderItems>
          <IconNotifications />
          <IconConfig />
          <img
            src="https://github.com/alexandrevelozo.png"
            className="profile-header"
            alt=""
          />
          <IconSwitchTheme onClick={toggleTheme}>
            {theme === 'light' ? darkTheme : lightTheme}
          </IconSwitchTheme>
        </HeaderItems>
      </Wrapper>
    </Container>
  );
}

export default Header;
