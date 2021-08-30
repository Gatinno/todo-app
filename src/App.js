import React from 'react';
import Routes from './service/routes';
import { Container } from './style';
import { HeaderComponent } from './components';

const App = () => {
  return (
    <Container>
      <HeaderComponent />
      <Routes />
    </Container>
  );
}

export default App;
