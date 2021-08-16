import React from 'react';
import '../Styles/Counter.css';
class Counter extends React.Component {

    state = {
        value: 0
    };

    handleIncrement = () =>  {
        this.setState((prevState) => ({
            value : prevState.value + 1
        }));
    };

    handleDecrement = () => {
        this.setState((prevState) => ({
            value : prevState.value - 1
        }));
    };

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h3>The current value of the state is {this.state.value}</h3>
                <button className="btn-increment" onClick={this.handleIncrement}>Increment</button>
                <button className="btn-decrement" onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    };
};

export default Counter;