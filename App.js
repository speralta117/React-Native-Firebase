import React from 'react';
import configureStore from './src/store/store';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import ProgramView from './src/components/ProgramView';
import {ApolloProvider} from 'react-apollo'
import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import { loadMembers } from './src/actions/memberActions'

const store = configureStore();
// store.dispatch(loadMembers());
const httpLink = createHttpLink({uri: 'https://hard-mole-51.localtunnel.me'})

const client = new ApolloClient({link: httpLink, cache: new InMemoryCache()})

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>

                <ApolloProvider client={client}>
                    <View style={styles.container}></View>
                    <ProgramView></ProgramView>
                </ApolloProvider>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
