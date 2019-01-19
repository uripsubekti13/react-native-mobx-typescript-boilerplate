import React from "react";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { NavigationScreenProp } from "react-navigation";

export interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class HomeScreen extends Component<HomeScreenProps, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <TouchableOpacity onPress={() => this.props.navigation.push("Setting")}>
          <Text>Go To Setting</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
