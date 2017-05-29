import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import ReactTable from 'react-table'
import 'react-table/react-table.css'
import FlatButton from 'material-ui/FlatButton';

var ReactTable = require('react-table').default

const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Submit" primary={true} />
    <br />
    <br />
  </div>
);

//need to set onclick for button that allows user to submit new info to table (change state fn)
//i.e. onclick in render. :
/* render() {
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
      </div> */

const TableExampleSimple = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Contract Name</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn><input type="text" contractName="Contract Name" /></TableRowColumn>
        <TableRowColumn><input type="text" contractDescription="Contract Description" /></TableRowColumn>
        <TableRowColumn><input type="text" price="Price" /></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn><input type="text" contractName="Contract Name" /></TableRowColumn>
        <TableRowColumn><input type="text" contractDescription="Contract Description" /></TableRowColumn>
        <TableRowColumn><input type="text" price="Price" /></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn><input type="text" contractName="Contract Name" /></TableRowColumn>
        <TableRowColumn><input type="text" contractDescription="Contract Description" /></TableRowColumn>
        <TableRowColumn><input type="text" price="Price" /></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn><input type="text" contractName="Contract Name" /></TableRowColumn>
        <TableRowColumn><input type="text" contractDescription="Contract Description" /></TableRowColumn>
        <TableRowColumn><input type="text" price="Price" /></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn><input type="text" contractName="Contract Name" /></TableRowColumn>
        <TableRowColumn><input type="text" contractDescription="Contract Description" /></TableRowColumn>
        <TableRowColumn><input type="text" price="Price" /></TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

/*addRow() {
        var nextState = this.state;
        nextState.rows.push('placeholder');
        this.setState(nextState);
    }; */





class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Contact Track</h2>
          <p>Keep track of your requests!</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
        
      
    );
  }
}

export default App;

//(Contract Name, Description, Price)
//a submit button
//and a list of contracts (displaying Title and Price)
//When the user clicks submit, add the Contract to the list
/* <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
*/