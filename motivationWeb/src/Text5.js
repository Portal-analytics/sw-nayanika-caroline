import React, { Component } from 'react';
import Text1 from './Text1.js';
import Text2 from './Text2.js';
import Text3 from './Text3.js';
import Text4 from './Text4.js';
import Text6 from './Text6.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


var motivation = ['Don\'t waste time!']


class Text5 extends Component {
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
      </div>
    );
  }
}

export default Text5;