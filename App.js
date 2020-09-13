import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux'

import store from './redux/store/'
import StocksNavigator from './navigation/StocksNavigator'

export default function App() {
  return (
    <Provider store={store}>
      <StocksNavigator />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
