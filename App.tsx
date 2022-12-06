import React from 'react';
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Let's build an Uber clone app!</Text>
        <StatusBar style="auto" />
      </View>
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
