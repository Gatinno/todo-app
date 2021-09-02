import React from 'react';
import Routes from './service/routes';
import { Container, Footer } from './style';
import { HeaderComponent } from './components';

const App = () => {
  return (
    <Container>
      <HeaderComponent />
      <Routes />
      <Footer>
        <p>created by <a href="https://github.com/Gatinno">Gatinno</a> - devChallenges.io</p>
      </Footer>
    </Container>
  );
}

export default App;
