import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

import {
  Container,
  ImageProfile,
  Profile,
  IconHome,
  IconUser,
  IconSystem,
  IconInfo,
  IconLogout,
  IconProducts,
  TabContent,
  StyledSun,
  StyledMoon,
} from './styles';

import Tab from '../Tab';
// import Main from '../../pages/User/Main';

const SideBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <Profile>
        <ImageProfile src="https://github.com/alexandrevelozo.png" />
        <div>
          <span>Alexandre Velozo</span>
        </div>
      </Profile>

      <TabContent>
        <Tab tabName="Início" Icon={<IconHome />} path="/inicio" />
        <Tab tabName="Usuários" Icon={<IconUser />} path="/users" />
        <Tab tabName="Produtos" Icon={<IconProducts />} path="/products" />
        <Tab tabName="Info" Icon={<IconInfo />} path="/info" />
        <Tab tabName="Configurações" Icon={<IconSystem />} path="/config" />
      </TabContent>
      <div className="tab-last">
        {theme === 'dark' ? (
          <Tab
            tabName="Modo claro"
            Icon={<StyledSun onClick={toggleTheme} />}
          />
        ) : (
          <Tab
            tabName="Modo escuro"
            Icon={<StyledMoon onClick={toggleTheme} />}
          />
        )}
        <Tab tabName="Sair" Icon={<IconLogout />} path="/" />
      </div>
    </Container>
  );
};

export default SideBar;
