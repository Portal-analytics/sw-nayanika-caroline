import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Navigator
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import SideMenu from "react-native-side-menu";
// import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";
import Settings from "./settings";
import Home from "./Home";
import Menu from "./Menu";
import settingpicture from "./settings.png";


const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

export default class App extends Component {
  state = {
    isOpen: false
  };

  updateMenuState = isOpen => {
    this.setState({ isOpen });
  };

  onMenuItemSelected = item => {
    this.setState({
      isOpen: !this.state.isOpen,
      selectedItem: item
    });
  };
  render() {
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          <Nav />
        </View>
      </SideMenu>
    );
  }
}

class SideMenuBar extends React.Component {
  render() {
    return <View />;
  }
}

class Nav extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" underlayColor="#dc143c" style={styles.navItem}>
              <Text style={styles.home}> Home </Text>
            </Link>
            <View>
            <Link to="/settings" underlayColor="#dc143c" style={styles.navItem}>
              <Text>
                <Image
                  source={settingpicture}
                  style={{ width: 32, height: 32 }}
                />
              </Text>
            </Link>
            </View>

          </View>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#e9967a"
  },
  sidebar: {
    backgroundColor: "black"
  },

  nav: {
    marginTop: 10,
    padding: 40,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },

  navbar: {
    backgroundColor: "#e9967a"
  },

  home: {
    fontSize: 40

  },

  welcome: {
    textAlign: "center"
  }


});
