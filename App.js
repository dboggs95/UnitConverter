/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  View
} from 'react-native';

class Result extends Component {
  render() {
    var fromVal= parseFloat(this.props.val);
    switch(this.props.unit){
      case 'meter':
        var toVal = fromVal * 0.9014;
        var unit = 'yards';
        break;
      default:
        var toVal = 'Invalid units';
        var unit = '';
    }
    return (
      <Text style={styles.results}>{toVal} {unit}</Text>
    );
  }
}

type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', metric: 'meter'};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder = "Value"
          onChangeText={(text) => this.setState({text})} 
        />
        <Picker
          selectedValue={this.state.metric}
          style={styles.metrics}
          onValueChange={(itemValue, itemIndex) => this.setState({metric: itemValue})}>
          <Picker.Item label="centimeters" value="centimeter" />
          <Picker.Item label="meters" value="meter" />
          <Picker.Item label="kilometers" value="kilometer" />
          <Picker.Item label="newtons" value="newton" />
          <Picker.Item label="celsius" value="celsius" />
          <Picker.Item label="kelvin" value="kelvin" />
        </Picker>
        <Text>
          =
        </Text>
        <Result unit={this.state.metric} val={this.state.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
  },
  metrics: {
    height: 50,
    width: 100,
  },
  input: {
    height: 40,
  },
  results: {
    height: 40,
  },
});
