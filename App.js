import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {observer} from 'mobx-react/native';
import { observable } from 'mobx';

import TodoList from  './store'

@observer
class HelloWorldApp extends Component {
  todoList = new TodoList()
  render() {
    console.info(this.todoList.todos)
    return (
        <View style={styles.container}>
          <View style={styles.uncompletedArea}>
            <Text style={styles.title}>未完成的项目</Text>
          </View>
          <View style={styles.completedArea}>
            <Text style={styles.title}>已完成的项目</Text>
          </View>
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
  uncompletedArea: {

  },
  completedArea: {

  },
  title: {

  }
})


export default HelloWorldApp