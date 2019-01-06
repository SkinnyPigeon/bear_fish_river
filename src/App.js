import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applicationName: 'Bear River Fish'
    }
  }

  
  render() {
    return (
      <div>
        <Header appName={this.state.applicationName}/>
        <Container>

        </Container>
      </div>
    );
  }
}

export default App;
