import React, { Component } from 'react';
import StateInput from './../StateInput';

class HelloWorld extends Component{

    constructor(props) {
        super(props)

        console.log(props, this.props);

        this.state = {
            name: 'José Antônio',
            txt: this.props.txt
        }
    }

    render() {
        const style = {
            color: '#FF0',
            fontSize: 50
        }
        return (
            
            <div className="class-from-react">
                <StateInput />
                <h1>{this.state.txt}</h1>
                <h1 style={style}>Hello World, <span>{ this.state.name }</span></h1>
            </div>
        );
    }

}

export default HelloWorld;