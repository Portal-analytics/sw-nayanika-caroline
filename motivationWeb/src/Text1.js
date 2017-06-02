import React, { Component } from 'react';
import Text2 from './Text2.js';
import Text3 from './Text3.js';
import Text4 from './Text4.js';
import Text5 from './Text5.js';
import Text6 from './Text6.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



var motivation = ['Hey you!']


class Text1 extends Component {
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

        <BrowserRouter>
       <p className = "Navigation">
       
        <a><Link to = "/1"> Hey</Link></a>
  

         <Route exact path="/1" Component={Text1}/>

         </p>
        </BrowserRouter>
      </div>
    );
  }
}

export default Text1;