import React, {Component} from 'react';
import {Button} from 'reactstrap';

export default class AtionButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            id: this.props.id
        } 
    }

    initalize() {
        console.log(this.state.id)
    }

    render() {
        console.log(this.state.id)
    return (
      <div>
          <Button />
      </div>
    );
  }
}