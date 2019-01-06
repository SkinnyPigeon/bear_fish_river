import React, {Component} from 'react';
import Fish from './Fish';
import Bear from './Bear';

export default class River extends Component {
    constructor(props) {
        super(props);

        this.addFishToWater = this.addFishToWater.bind(this);
        this.addBearToWater = this.addBearToWater.bind(this);
        this.addFishToBear = this.addFishToBear.bind(this);

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

    fishCheck() {
        if(this.state.fish.length > 0) return true;
    }

    bearCheck() {
        if(this.state.bears.length > 0) return true;
    }

    addFishToBear() {
        let whichBear = Math.floor((Math.random() * this.state.bears.length) + 1) - 1;
        let readyToEat = this.fishCheck();
        let readyToHunt = this.bearCheck();

        if(readyToEat && readyToHunt) {
            let grabbedFish = this.state.fish.pop();
            grabbedFish.state.alive = false;
            this.state.bears[whichBear].state.fish.push(grabbedFish);
            console.log("Yum yum, happy bear")
            console.log(this.state)
        } else if (readyToEat && !readyToHunt) {
            console.log("I'm too far away, rawr");
        } else {
            console.log("No fish, sad bear");
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.addFishToWater}>Add fish to water</button>
                <button onClick={this.addBearToWater}>Add bear to water</button>
                <button onClick={this.addFishToBear}>Add fish to bear</button>
            </div>
        );
    }
}
