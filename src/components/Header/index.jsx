import React, { useContext } from 'react';

import IconDashboard from '../../components/IconDashboard';
import IconNotifications from '../../components/IconNotifications';
import IconConfig from '../../components/IconConfig';

import { ThemeContext } from '../contexts/ThemeContext';

import {
  Container,
  Wrapper,
  SessionHeader,
  HeaderItems,
  StyledSun,
  StyledMoon,
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

          {theme === 'dark' ? (
            <StyledSun size={32} onClick={toggleTheme} />
          ) : (
            <StyledMoon size={32} onClick={toggleTheme} />
          )}
        </HeaderItems>
      </Wrapper>
    </Container>
  );
}

export default Header;
