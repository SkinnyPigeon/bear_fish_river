import React, {Component} from 'react';
import Fish from './Fish';
import ActionButton from './ActionButton';

export default class River extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fish: []
        } 
    }

    initialize() {
        let riverButton = new ActionButton({id: "riverButton"});
        console.log(riverButton)
        return riverButton
    }

    // addFishToWater = function() {
    //     let newFish = new Fish();
    //     newFish.sayHello();
    //     this.state.fish.push(newFish);
    //     console.log(this.state.fish)
    // }
    render(){
        return (
            <div></div>
        );
    }
}
