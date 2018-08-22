import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
  }

  handlerClickBtn() {
    this.props.sayHello();
  }

  render() {
    const { msg } = this.props;
    return (
      <div>
        <button onClick={this.handlerClickBtn.bind(this)}>Click to Button</button>
        <p>{ msg.data }</p>
      </div>
    );
  }
}

export default App;
