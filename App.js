import React from 'react';
import configureStore from './src/store/store';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import ProgramView from './src/components/ProgramView';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ProgramView></ProgramView>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
