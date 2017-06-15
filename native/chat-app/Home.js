import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import TextBox from "./App.js";
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 20,
    padding: 10
  },
  caption: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#F5FCFF",
    marginBottom: 10
  },
  welcome: {
    fontSize: 50,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: "mediumvioletred",
    borderWidth: 3,
    textAlign: 'center'
  },
  output: {
    fontSize: 50,
    color: "blue"
  },
  posts:{
      fontSize: 20,
      marginLeft: 12,
      fontWeight: 'bold',
      width: 200,
    borderRadius: 10
  },
  message:{
    backgroundColor:'pink',
    marginBottom: 10,
    marginLeft: 12,
    marginRight: 30,
    borderRadius: 10
  },
  time:{
    color: 'gray',
    fontSize: 20,
      marginLeft: 12,
      fontWeight: 'bold',
      width: 200,
    borderRadius: 10
  }
});
export default class Home extends React.Component {
  state = {
    user: "Caroline",
    quotes: [],
    input: "",
    curTime: null
  };

  updateText = text => {
    this.setState({
      ...this.state,
      inputQuote: text
    });
  };

  addText = () => {
    newQuotes = this.state.quotes;
    newQuotes.push(this.state.inputQuote);
    this.refs.newQuotes.value = "";
    var temporary_time = new Date().toTimeString().slice(0, 5);
    this.setState({
      ...this.state,
      quotes: newQuotes,
      inputQuote: "",
      currentTime: temporary_time
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="newQuotes"
          style={styles.input}
          placeholder="Enter what you want to say here!"
          onChangeText={text => this.updateText(text)}
          onSubmitEditing={this.addText}
          keyboardAppearance="dark"
          returnKeyType="send"
          value={this.state.inputQuote}
        />
        {this.state.quotes.map(quote => {
          return (
            <View style={styles.message}>
              <Text style={styles.posts}>{this.state.user}: {quote}</Text>
              <Text style={styles.time}>
                {this.state.currentTime}
              </Text>

            </View>
          );
        })}
      </View>
    );
  }
}