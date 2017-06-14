import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import SideMenu from "react-native-side-menu";



export default class App extends React.Component {


  
  render() {

    const menu = <Menu navigator={navigator}/>;

    return (
      <div>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>ok.</Text>
      </View>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
