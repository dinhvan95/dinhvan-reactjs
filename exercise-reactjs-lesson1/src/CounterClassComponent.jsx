import { Component } from "react";

export default class CounterClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    increaseCounter() {
        this.setState((preState) => {
            console.log(preState, "preState");
            return {
                counter: preState.counter + 1
            }
        });
    }
    decreaseCounter() {
        this.setState((preState) => {
            console.log(preState, "preState");
            if (preState.counter >= 1) {
                return {
                    counter: preState.counter - 1
                }
            }
            return {
                counter: 0
            }
        });
    }
    render() {
        return (
            <div>
                <button onClick={() => this.increaseCounter()}>+</button>
                <p>{this.state.counter}</p>
                <button onClick={() => this.decreaseCounter()}>-</button>
            </div>
        );
    }
}