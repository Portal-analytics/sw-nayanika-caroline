import React, { Component } from 'react';
import logo from './logo.svg';



var motivation = ["Go to sleep", "Eat food", 'Stay hungry', 'stay foolish'];
var index = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motivation: motivation,
      index: 0,
    }
  }

  handleOrder() {
    if (this.state.index === 3) {
      this.setState({
        ...this.state,
        index: 0,
      })
    }

    else {
      this.setState({
        ...this.state,
        index: this.state.index + 2,
      })

    }


  }

  handlerandom() {

    var randomNumber = Math.floor((Math.random() * 4) )


    this.setState({
      ...this.state, 
      index: randomNumber,
    })

  }


  render() {


    return (
      <div className="App">
        <div className="App-header">
          <h2> Quotes</h2>
        </div>
        <p className="App-intro">
          <button className="button-display" onClick={() => { this.handleOrder() }}>{motivation[this.state.index]}</button>
        </p>
        <div>
          <button className="button-random" onClick={() => { this.handlerandom() }}>click</button>
      </div>

      </div>
    );
  }
}

export default App;