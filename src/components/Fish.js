import React, {Component} from 'react';

export default class Fish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alive: true,
        } 
    }

    hasBeenEaten() {
        this.setState({alive: false})
    }
}
