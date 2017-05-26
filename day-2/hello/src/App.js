//import React from 'react'
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



var _this;

var names = [ "get up", "stop sleeping", "drink coffee", "go shower", "wake up"]
  
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
);
const style = {
  marginRight: 20,
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatingActionButtonExampleSimple = () => (
  <div>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

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
      <MuiThemeProvider App-Bar>
      <div className="App">
        <AppBar />
        <div  onClick ={() => this.changeState()}> {names[this.state.index]}>
        <FloatingActionButtonExampleSimple />
       
        </div>
         <h1 onClick ={() => this.changeState()}>{names[this.state.index]}</h1>
      
        
      </div>
    


</MuiThemeProvider>

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