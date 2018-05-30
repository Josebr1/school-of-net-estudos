import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {

        const style = {
            color: '#FF0',
            fontSize: 50
        }

        return (
            <div className="my-class-from-react">
                <h1 style={style}>Hello World React</h1>
            </div>
        )
    }
}

export default HelloWorld;