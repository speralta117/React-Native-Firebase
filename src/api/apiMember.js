import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ApolloClientProvider from '../providers/ApolloClientProvider';

const client = ApolloClientProvider.client;

const FEED_QUERY = gql`
{
  feed { 
    id
    url 
    description 
  } 
}
`
export function getMembers(){
    return client.query({
        query: FEED_QUERY
      }).then(response => response.data.feed);
}