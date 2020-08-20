import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class ColorButton extends Component {
  display(){
    alert("I am an alert box");
  }
  render(){
    return(
      <Button color = {this.props.color} title="Click Me" onPress={this.display}/>
    )
  }
}

class Button2 extends Component {
  displayButton(){
   alert("Button2");
  }
  render() {
    return(
      <Button color="purple" title="New Button" onPress={this.displayButton}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <ColorButton color="gold"/>
        <Text>My First React Component</Text>
        <Button2/>
      </View>
    );
  }
}