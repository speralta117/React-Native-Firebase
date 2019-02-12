import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

class ApolloClientProvider {
    constructor() {
        const httpLink = createHttpLink({ uri: 'https://plastic-bat-16.localtunnel.me' })

        this.client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });
    }
}

export default new ApolloClientProvider()