import React from 'react';
import configureStore from './src/store/store';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {loadMeetings } from './src/actions/memberActions';
import { ApolloProvider } from 'react-apollo';
import ApolloClientProvider from './src/providers/ApolloClientProvider';
import AppContainer from './src/components/Navigator';

const store = configureStore();
store.dispatch(loadMeetings());

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={ApolloClientProvider.client}>
                    <SafeAreaView style={styles.safeArea}>
                        <View style={styles.container}>
                            <AppContainer />
                        </View>
                    </SafeAreaView>
                </ApolloProvider>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#F3F3F3', justifyContent:
        'center'
    },
    safeArea: {
      flex: 1,
      backgroundColor: '#F3F3F3'
    }
});
