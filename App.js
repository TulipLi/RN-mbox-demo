import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    console.info("hello world")
    return (
        <View style={styles.container}>
          <Text style={styles.helloworld}>Hello world!</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  helloworld: {
    textAlign: 'center',
  }
})