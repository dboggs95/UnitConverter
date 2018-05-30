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

/* Conversion factors */
const millimeter = 39.4; //to 1000ths of an inch
const centimeter = 0.394; //to inches
const meter = 1.093; //to yards
const kilometer = 0.621; //to miles
const gram = 0.035; //to oz-m
const kilogram = 2.205; //to lb-m
const newton = 0.225; //to lb-f
const milliliter = 0.034; //to fl. oz.
const liter = 1.057; //to quarts
const celsius = [1.8, 32]; //to fahrenheit
const kelvin = 1.8; //to rankine

class Result extends Component {
  render() {
    var fromVal= parseFloat(this.props.val);
    switch(this.props.unit){
      case 'millimeter':
        var toVal = fromVal * millimeter;
        var unit = '1000ths of an inch';
        break;
      case 'centimeter':
        var toVal = fromVal * centimeter;
        var unit = 'inches';
        break;
      case 'meter':
        var toVal = fromVal * meter;
        var unit = 'yards';
        break;
      case 'kilometer':
        var toVal = fromVal * kilometer;
        var unit = 'miles';
        break;
      case 'gram':
        var toVal = fromVal * gram;
        var unit = 'ounce-masses';
        break;
      case 'kilogram':
        var toVal = fromVal * kilogram;
        var unit = 'pound-masses';
        break;
      case 'newton':
        var toVal = fromVal * newton;
        var unit = 'pound-forces';
        break;
      case 'milliliter':
        var toVal = fromVal * milliliter;
        var unit = 'fluid ounces';
        break;
      case 'liter':
        var toVal = fromVal * liter;
        var unit = 'quarts';
        break;
      case 'celsius':
        var toVal = (fromVal * celsius[0]) + celsius[1];
        var unit = 'fahrenheit';
        break;
      case 'kelvin':
        var toVal = fromVal * kelvin;
        var unit = 'rankine';
        break;
      default:
        var toVal = 'Invalid units';
        var unit = '';
    }
    var toVal3 = toVal.toFixed(3);
    if(toVal3%1 == 0)
    {
      var toValRound = toVal.toFixed(0);
    }
    else if(toVal3%0.1 == 0)
    {
      var toValRound = toVal.toFixed(1);
    }
    else if(toVal3%0.01 == 0)
    {
      var toValRound = toVal.toFixed(2);
    }
    else
    {
      var toValRound = toVal3;
    }
    
    
    return (
      <Text style={styles.results}>{toValRound} {unit}</Text>
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
          <Picker.Item label="millimeters" value="millimeter" />
          <Picker.Item label="centimeters" value="centimeter" />
          <Picker.Item label="meters" value="meter" />
          <Picker.Item label="kilometers" value="kilometer" />
          <Picker.Item label="grams" value="gram" />
          <Picker.Item label="kilograms" value="kilogram" />
          <Picker.Item label="milliliters" value="milliliter" />
          <Picker.Item label="liters" value="liter" />
          <Picker.Item label="newtons" value="newton" />
          <Picker.Item label="celsius" value="celsius" />
          <Picker.Item label="kelvin" value="kelvin" />
        </Picker>
        <Text style={{fontSize: 30}}>
          ==
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
    height: 30,
    width: 250,
  },
  input: {
    height: 90,
    width: 250,
    fontSize: 40,
  },
  results: {
    height: 120,
    width: 250,
    fontSize: 40,
  },
});
