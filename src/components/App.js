import React from 'react';

import Container from 'components/Container';
import Header from 'components/Header';

function App({children}) {
  return (
      <Container className="app">
        <Header />
        {children}
      </Container>
    )
}

export default App;

