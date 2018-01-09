import React from 'react';

import {
  View,
  Text,
} from 'react-native';

export default class Chat extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <View>
        <Text>
          Hello {this.props.name}
        </Text>
      </View>
    );
  }
}

// Chat.defaultProps = {
//   name: 'John',
// };

// Chat.propTypes = {
//   name: React.PropTypes.string,
// };