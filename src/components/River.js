import React, {Component} from 'react';
import Fish from './Fish';

export default class River extends Component {
    constructor(props) {
        super(props);

        this.addFishToWater = this.addFishToWater.bind(this);

        this.state = {
            fish: [],
            button: null,
        } 
    }

    addFishToWater() {
        let newFish = new Fish();
        newFish.sayHello();

        this.state.fish.push(newFish);
        this.state.fish.forEach(function(oneFish) {
            console.log(oneFish.sayHello())
        })
        console.log(this.state.fish)

    }

    render(){
        return (
            <button onClick={this.addFishToWater}>Add fish to water</button>
        );
    }
}
