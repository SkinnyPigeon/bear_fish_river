import React, {Component} from 'react';
import {Button} from 'reactstrap';

export default class AtionButton extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            buttonID: this.props.buttonID,
            getsClicked: this.props.getsClicked
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
        console.log(this.state)
    }

    componentDidMount() {
        console.log(this.state)
    }

    render() {
    return (
      <div>
          <Button onClick={this.toggle}/>
      </div>
    );
  }
}