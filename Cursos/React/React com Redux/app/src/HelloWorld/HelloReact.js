import React, { Component } from 'react';

class Hello extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.setState({
      msg: ''
    });
  }

  handlerClickBtn(){
    this.setState({
      msg: 'Hello World'
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handlerClickBtn.bind(this)}>Click to button</button>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default Hello;
