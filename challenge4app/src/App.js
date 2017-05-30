import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import * as edit from 'react-edit';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      description:"",
      price:"",
      contracts:[]
    }
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleDesriptionChange=this.handleDescriptionChange.bind(this);
    this.handlePriceChange=this.handlePriceChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleNameChange(e){
    const description=this.state.description;
    const price=this.state.price;
    const contract=this.state.contracts;
    const index=this.state.index;
    this.setState({
      name:e.target.value,
      description: description,
      price: price,
      contracts:contract,
      index: index
    })
    console.log(this.state)
  }

  handleDescriptionChange(e){
    const name=this.state.name;
    const price=this.state.price;
    const contract=this.state.contracts;
    const index=this.state.index;
    this.setState({
      name:name,
      description: e.target.value,
      price: price,
      contracts:contract,
      index: index
    })
    console.log(this.state)
  }

  handlePriceChange(e){
    const description=this.state.description;
    const contract=this.state.contracts;
    const name=this.state.name;
    const index=this.state.index;
    this.setState({
      name: name,
      description: description,
      price: e.target.value,
      contracts:contract,
      index: index
    })
    console.log(this.state)
  }
  
  /*
  const Counter = React.createClass({
    incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
    */

    

    handleSubmit(e){
      var infoArray=[];
      infoArray.push(this.state.name);
      infoArray.push(this.state.description);
      infoArray.push(this.state.price);
      infoArray.push(this.state.index); //info array ...retrieve the index by asking infoArray[3]; 
      let newContracts = this.state.contracts;
      newContracts.push(infoArray)
      let newContractsObject = {}; //add to prev contract and then set state
      //newContractsObject.push(newContracts); 
      this.setState({
        name:this.state.name,
        description: this.state.description,
        price: this.state.price,
        index: this.state.index,
        contracts: newContracts,
        newContractsObject: this.state.newContractsObject
      })
      console.log(this.state) //so here we need to NOT just print it...
      e.preventDefault();
    }

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
      infoArray.index = count;
    }
  }
  //convert from array of arrays to an array of objects
    
    handleClick(index) {
    //find the index of the edit button -- listContracts  index 
    //get the index by accessing the ... 
    this.state.name = this.name;
    this.state.description = this.index.description;
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
//nested textbox // give value id //then call set state with tthose new values.... 

  render() {
    const listContracts = this.state.contracts.map((c, index) =>
      <li> { "Name: "+c[0]+" Description: "+c[1]+" Price: "+c[2]} <button onClick={this.handleClick}>edit</button></li>
    );
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
