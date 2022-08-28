import React from 'react';
import './App.css';
import { Component } from 'react';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }

  increament = () =>{
    this.setState({count: this.state.count + 1 });
  }

  decreement = () =>{
    this.setState({count: this.state.count - 1});
  }
  render() {
    return (
      <div className='App'>
          <h2>Counter App</h2><hr/>
          <button onClick={this.decreement} className='counter counter-color-brown'>-</button>
          <button onClick={this.increament} className='counter counter-color-green'>+</button>
          <h2>{this.state.count}</h2>
      </div>
    )
  }
}
