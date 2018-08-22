import React, { Component } from "react";
import { connect } from "react-redux";
import CounterActions from "./../actions/CounterActions";
class Counter extends Component {

    constructor(props){
        super(props);
    }

    handlerIncrement() {
        this.props.onIncrement();
    }

    handlerDecrement() {
        this.props.onDecrement()
    }

    render() {
        const { value } = this.props;
        return (
            <div>
                <h2>Clicked: { value } times</h2>
                <button onClick={this.handlerIncrement.bind(this)}>Increment</button>
                <button onClick={this.handlerDecrement.bind(this)}>Decrement</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (value) => dispatch(CounterActions.onIncrement(value)),
        onDecrement: (value) => dispatch(CounterActions.onDecrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);