import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class ChatApp extends Component {
  render () {
    return (
      <View style = {styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={style.instructions}>
          To get started, edit index.ios.js
        </Text> 
    );
  }
}