import React, {Component} from 'react';
import Fish from './Fish';
import ActionButton from './ActionButton';

export default class River extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fish: [],
            button: null,
        } 
    }

    componentDidMount() {
        let riverButton = new ActionButton({buttonID: "river", getsClicked: this.addFishToWater});
        console.log("HERE: ", riverButton)
        this.setState({button: riverButton})
        return riverButton;
    }

    addFishToWater() {
        let newFish = new Fish();
        newFish.sayHello();
        this.setState(this.state.fish.push(newFish));
        console.log(this.state.fish)
    }

    render(){
        return (
            <button onClick={this.addFishToWater}/>
        );
    }
}
