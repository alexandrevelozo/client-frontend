import React from 'react';

import { Container } from './styles';

import SideBar from '../../components/SideBar';

function Dashboard({ children }) {
  return (
    <Container>
      <SideBar />
      {children}
    </Container>
  );
}

export default Dashboard;
