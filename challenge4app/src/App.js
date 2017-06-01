import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import * as edit from 'react-edit';
import * as firebase from 'firebase'

  ///

var config = {
  apiKey: "AIzaSyCfGu22myhTt4-2i0-TuZpoIyuznKuVOFQ",
  authDomain: "contact-tracker-ccf9c.firebaseapp.com",
  databaseURL: "https://contact-tracker-ccf9c.firebaseio.com",
  storageBucket: "contact-tracker-ccf9c.appspot.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
  var database = firebase.database();

var testCase = {
  name: "nayanika",
  name2: "caroline",
}

firebase.database().ref('testCase').set(testCase);
var readData = firebase.database().ref("newContracts");

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      description:"",
      price:"",
      index:"",
      count: 0,
      contracts:[]
    }
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleDesriptionChange=this.handleDescriptionChange.bind(this);
    this.handlePriceChange=this.handlePriceChange.bind(this);
    this.handleIndexChange=this.handlePriceChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }

  handleNameChange(e){
    this.setState({
      ...this.state,
      name:e.target.value
    })
    console.log(this.state)
  }

  handleDescriptionChange(e){
    this.setState({
      ...this.state,
      description: e.target.value
    })
    console.log(this.state)
  }

  handlePriceChange(e){
    this.setState({
      ...this.state,
      price: e.target.value
    })
    console.log(this.state)
  }
  

    handleSubmit(e){
      var infoArray=[];
      infoArray.push(this.state.name);
      infoArray.push(this.state.description);
      infoArray.push(this.state.price);
      infoArray.push(this.state.index); //info array ...retrieve the index by asking infoArray[3]; 
      let newContracts = this.state.infoArray;
      
      let newContractsObject = {
        ...this.state
      }; 
      
      newContracts.push(newContractsObject);
      
      var count = this.state.count + 1;
      
      let index = {
        if(index = null){
            index = count;
        }
      }

      this.setState({
        ...this.state.newContracts  
      })
      console.log(this.state) //so here we need to NOT just print it...
      e.preventDefault();
    }

/*
    handleIndexChange(e){
    //if statement to check if index already assigned; so would keep it when pressed submit. otherwise, increment.
    const count = this.state.count +1; //attach that to onclick for submit //assign index on submit //need index field
    const index = infoArray[3];
    if(index != null){
      //replace when submit is clicked (keep same index)
      this.state.index = index; //do nothing
    }
    else{
      //this.state.index = count; 
      //infoArray.index = count;
    }
  }
  */
  //convert from array of arrays to an array of objects

   /* 
    handleClick() {
    //find the index of the edit button -- listContracts  index 
    //get the index by accessing the ... 
    this.setState({
      handleSubmit
    })
  }
  */

//nested textbox // give value id //then call set state with tthose new values.... 

  render() {
    const listContracts = this.state.contracts.map(c => {
      <li> { "Name: "+c.name+" Description: "+c.description+" Price: "+c.price+" Index:"+c.index} <button onClick={this.handleSubmit}>edit</button></li>
    });
    //add index to onclick and store in state  --= y/n editing

    console.log(listContracts);
    //we need to attach a counter to the submit button to increment the index and apply that index?
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Contract Tracker</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" onChange={this.handleNameChange}/>
            </label>
            <label>
              Description:
              <input type="text" onChange={this.handleDescriptionChange}/>
            </label>
            <label>
              Price:
              <input type="text" onChange={this.handlePriceChange}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      <ul type="none">
        {listContracts}
      </ul>
      </div>
    );
  }
}

export default App;
