import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

class ApolloClientProvider {
    constructor() {
        const httpLink = createHttpLink({ uri: 'https://dangerous-termite-85.localtunnel.me' })
        // const httpLink = createHttpLink({ uri: 'http://localhost:4000' })

        this.client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });
    }
}

export default new ApolloClientProvider()