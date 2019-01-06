import React, {Component} from 'react';

export default class Bear extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alive: true,
        } 
    }

    hasBeenEaten() {
        this.setState({alive: false})
        return this.state;
    }

    sayHello() {
        return "Rarrw"
    }
}
