import React, {Component} from 'react';
import Fish from './Fish';
import Bear from './Bear';

export default class River extends Component {
    constructor(props) {
        super(props);

        this.addFishToWater = this.addFishToWater.bind(this);
        this.addBearToWater = this.addBearToWater.bind(this);

        this.state = {
            fish: [],
            bears: []
        } 
    }

    addFishToWater() {
        let newFish = new Fish();
        newFish.sayHello();

        this.state.fish.push(newFish);
        this.state.fish.forEach(function(oneFish) {
            console.log(oneFish.sayHello())
        })
        console.log(this.state)
    }

    addBearToWater() {
        let newBear = new Bear();
        newBear.sayHello();

        this.state.bears.push(newBear);
        this.state.bears.forEach(function(oneBear) {
            console.log(oneBear.sayHello())
        })
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <button onClick={this.addFishToWater}>Add fish to water</button>
                <button onClick={this.addBearToWater}>Add bear to water</button>
            </div>
        );
    }
}
