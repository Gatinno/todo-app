import React from 'react';
import { Header, Title } from '../style';
import NavbarComponent from './navbarComponent';

const HeaderComponent = () => {
  return (
    <Header>
      <Title>#todo</Title>
      <NavbarComponent />
    </Header>
  );
}

export default HeaderComponent;