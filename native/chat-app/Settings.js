import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },
  welcome: {
    fontSize: 15,
    textAlign: "center",
    margin: 10
  },
  settings: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: "center",
    color: "blue",
    marginBottom: 5
  }
});

export default class Setting extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.settings}>Settings</Text>
        <Text style={styles.welcome}>Edit your settings here.</Text>
      </View>
    );
  }
}