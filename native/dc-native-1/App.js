import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements'
import { SideMenu, List, ListItem } from 'react-native-elements'
import { NativeRouter, Route, Link } from 'react-router-native'

//var bool = true;

export default class App extends React.Component {
  
  render() {
    
    
    
    
    return (
     <div>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Awesome</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
