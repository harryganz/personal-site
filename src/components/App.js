import React, { Component } from 'react';
import Container from 'components/Container';
import Header from 'components/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Container>
          <Header />
        </Container>
      </div>
    );
  }
}

export default App;
