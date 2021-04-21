import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={Store}>
          <Navigation/>
        </Provider>
      </NavigationContainer>
    );
  }
}

