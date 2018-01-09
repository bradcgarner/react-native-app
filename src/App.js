import React from 'react';

import Home from './components/Home';
import Chat from './components/Chat';

import {  //navigation
  Router,
  Scene,
} from 'react-native-router-flux';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Scene key='root'>
        </Scene>
      </Router>
    );
  }
}