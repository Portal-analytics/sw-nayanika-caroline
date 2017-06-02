import React, { Component } from 'react';
import Text1 from './Text1.js';
import Text2 from './Text2.js';
import Text3 from './Text3.js';
import Text4 from './Text4.js';
import Text5 from './Text5.js';
import Text6 from './Text6.js';
import './App.css';


var intro = ['Your daily dose of YOU\'VE GOT THIS.']
var motivation = ['Hey you!', 'You are awake and alive this morning.', 'That means you can get closer to achieving your goals.', 'That means you can challenge yourself to grow.', 'Don\'t waste time!', 'You are capable.']
var i = 0;
//var motivationText = motivation[a]  



function handleClick() {
  for(i=0; i<=7; i++){
  return(motivation[i]);  
  }
  
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img/>
          <h2>Get Motivated!</h2>
        </div>
        <p className="App-intro">
          The only easy day was yesterday. 
        </p>
        
        <p className="motivation-texts">
          
          <h3 onClick={handleClick}>
          Yes!
          </h3>
        </p>
       
      </div>
    );
  }
}

export default App;