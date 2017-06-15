import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as firebase from 'firebase';


//edit profile functions to be included

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Edit your profile.</Text>
        <Text>Make changes here.</Text>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});