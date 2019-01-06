import React, {Component} from 'react';
import Fish from './Fish';
import Bear from './Bear';
import River from './River';

export default class Forest extends Component {
    constructor(props) {
        super(props);

        this.formRiver = this.formRiver.bind(this);
        this.spawnFish = this.spawnFish.bind(this);
        this.birthBear = this.birthBear.bind(this);
        this.whichRiver = this.whichRiver.bind(this);
        this.isAtLeastOneRiver = this.isAtLeastOneRiver.bind(this);
        this.addFishToBear = this.addFishToBear.bind(this);

        this.state = {
            rivers: []
        } 
    }

    formRiver() {
        let newRiver = new River();
        this.state.rivers.push(newRiver);
        console.log("Witness the miracle of nature", this.state);
    }

    isAtLeastOneRiver() {
        if(this.state.rivers.length > 0) return true;
    }

    whichRiver() {
        return Math.floor((Math.random() * this.state.rivers.length) + 1) - 1;
    }

    spawnFish() {
        if(!this.isAtLeastOneRiver()) {
            console.log("Alas, despite the miraculous creation of a spontaneous fish, with no river, it dies");
            return;
        }
        let whichRiver = this.whichRiver();
        let newFish = new Fish();
        newFish.sayHello();

        this.state.rivers[whichRiver].state.fish.push(newFish);
        this.state.rivers[whichRiver].state.fish.forEach(function(fish) {
            console.log(fish.sayHello())
        })
        console.log(this.state)
    }

    birthBear() {
        if(!this.isAtLeastOneRiver()) {
            console.log("Sadly the bear discovers a dried up creek, he must search onwards");
            return;
        }
        let whichRiver = this.whichRiver();
        let newBear = new Bear();
        newBear.sayHello();

        this.state.rivers[whichRiver].state.bears.push(newBear);
        this.state.rivers[whichRiver].state.bears.forEach(function(bear) {
            console.log(bear.sayHello())
        })
        console.log(this.state)
    }

    fishCheck(whichRiver) {
        if(this.isAtLeastOneRiver() && this.state.rivers[whichRiver].state.fish.length > 0) return true;
    }

    bearCheck(whichRiver) {
        if(this.isAtLeastOneRiver() && this.state.rivers[whichRiver].state.bears.length > 0) return true;
    }

    addFishToBear() {
        if(!this.isAtLeastOneRiver()) {
            console.log("With neither bear nor fish we simply witness the ever expanding tundra, bleakly stretching to the horizon");
            return;
        }
        let whichRiver = this.whichRiver();
        console.log(this.state.rivers)
        let whichBear = Math.floor((Math.random() * this.state.rivers[whichRiver].state.bears.length) + 1) - 1;
        let readyToEat = this.fishCheck(whichRiver);
        let readyToHunt = this.bearCheck(whichRiver);

        if(readyToEat && readyToHunt) {
            let grabbedFish = this.state.rivers[whichRiver].state.fish.pop();
            grabbedFish.state.alive = false;
            this.state.rivers[whichRiver].state.bears[whichBear].state.fish.push(grabbedFish);
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
                <button onClick={this.formRiver}>Add river to forest</button>
                <button onClick={this.spawnFish}>Add fish to water</button>
                <button onClick={this.birthBear}>Add bear to water</button>
                <button onClick={this.addFishToBear}>Add fish to bear</button>
            </div>
        );
    }
}
