import React, { Component } from 'react'
import Proptypes from 'prop-types'
import './Counter.css'

class CounterButton extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: Proptypes.number
}

class Counter extends CounterButton {
    constructor() {
        super();
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(by) {
        console.log(`increment from child - ${by}`);

        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        );
    }

    decrement(by) {
        console.log(`decrement from child - ${by}`);

        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        );
    }

    reset() {
        this.setState(
            (prevState) => {
                return { counter: 0 }
            }
        );
    }

    render() {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} by={5}></CounterButton >
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} by={10}></CounterButton >
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div >
        );
    }
}


export default Counter