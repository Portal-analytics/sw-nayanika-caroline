import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var _this;

var names = [ "get up", "stop sleeping", "drink coffee", "go shower", "wake up"]
  


class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
    //this.changeState = this.changeQuote.bind(_this);
  }



  render() {
    return (
      <div className="App">
      
         <h1 onClick ={() => this.changeState()}>{names[this.state.index]}</h1>

      </div>
    );
}

changeState() {
  console.log("am i here");
  if (this.state.index == 4) {
    this.setState({
      index: 0
    });
  }


  else {
    var index = this.state.index + 1
    this.setState ( {
      index: index
    });
  }
}
}
export default App;