import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import TextBox from "./App.js";

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
    backgroundColor: "#F5FCFF"
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
    borderColor: "purple",
    borderWidth: 3,
    textAlign: 'center'
  },
  output: {
    fontSize: 50,
    color: "blue"
  },
  posts:{
      fontSize: 20,
      margin: 10,
      fontWeight: 'bold'
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
            <View>
              <Text style={styles.posts}>User: {this.state.user}</Text>
              <Text style={styles.posts}>Message: {quote}</Text>
              <Text style={styles.posts}>
                Time: {this.state.currentTime}
                {"\n"}
              </Text>

            </View>
          );
        })}
      </View>
    );
  }
}