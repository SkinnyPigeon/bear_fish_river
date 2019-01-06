import React, {Component} from 'react';

export default class Bear extends Component {
    constructor(props) {
        super(props);

        this.fishCheck = this.fishCheck.bind(this);
        this.eatsAFish = this.eatsAFish.bind(this);

        this.state = {
            fish: []
        }
    }

    hasBeenEaten() {
        this.setState({alive: false})
        return this.state;
    }

    sayHello() {
        return "Rarrw"
    }

    fishCheck(fishCount) {
        console.log(fishCount)
        if (fishCount > 0) return true;
    }

    eatsAFish(freshFish) {
        let hunting = this.fishCheck();
        if (hunting) {
            console.log("Nom nom nom")
            this.state.fish.push(freshFish)
            console.log(this.state)
        } else {
            console.log("No fish, sad bear")
        }
    }

    // render(){
    //     return (
    //         <div>
    //             <button onClick={this.eatsAFish}>Add fish to bear</button>
    //         </div>
    //     );
    // }
}
