import React from "react";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

export interface SettingScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

@observer
export default class SettingScreen extends Component<SettingScreenProps, any> {
  @observable title = 'Setting';
  @action changeTitle = () => {
    this.title === 'Setting' ? this.title = 'aku title' : this.title = 'Setting';
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.title}</Text>
        <Button onPress={this.changeTitle} title={'change'}></Button>
        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
          <Text>Go Home</Text>
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
