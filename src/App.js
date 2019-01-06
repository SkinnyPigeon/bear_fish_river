import React, { Component } from 'react';
import {Container} from 'reactstrap';
import Header from './components/Header';
import ActionButton from './components/ActionButton';

import River from './components/River';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applicationName: 'Bear River Fish',
    }
  }

  initialize() {
    let river = new River()
    console.log(river)
  }

  render() {
    return (
      <div>
        <Header appName={this.state.applicationName}/>
        <Container>
          <River buttonID="riverButton"></River>
          {/* <ActionButton buttonID={"This is my ID"}></ActionButton> */}
          {/* <ActionButton buttonID={"This is another ID"}></ActionButton> */}
        </Container>
      </div>
    );
  }
}

export default App;
