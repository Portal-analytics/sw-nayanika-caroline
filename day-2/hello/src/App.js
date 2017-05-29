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
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';




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
const FloatingActionButtonSimple = () => (
  <div>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);
const FloatingActionButtonSimple2 = () => (
  <div>
    <FloatingActionButton mini={true} secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index})};

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
        <FloatingActionButtonSimple />
        </div>
        <div  onClick ={() => this.changeState()}> {names[Math.floor(Math.random*names.length)]}>
         
        <FloatingActionButtonSimple2 />
        <h1 onClick ={() => this.changeState()}>{names[this.state.index]}</h1>
        </div>
        

         <div selectedIndex={this.state.selectedIndex}>

           <BottomNavigation />
         </div>
         
                 
      
        
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