import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

export default class Home extends React.Component {
  state = {
    name: '',
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
          style={styles.nameInput}
          placeholder = 'John Snow'
          onChangeText={(text)=>{
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={()=>{
            Actions.chat({ // App1 Scene key='chat'
              name: this.state.name,
            });
          }}
        >
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 40,
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    paddingLeft: 5,
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  }
})