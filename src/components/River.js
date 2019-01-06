import React, {Component} from 'react';
import fish from './Fish';

export default class River extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fish: []
        } 
    }
}
