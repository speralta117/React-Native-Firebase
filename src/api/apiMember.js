import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import ApolloClientProvider from '../providers/ApolloClientProvider';

const client = ApolloClientProvider.client;

const MEETINGS_QUERY = gql`
{
  meetings {
    id
    from
      to
      assigments {
        id
        name
      }
      
    }
}
`
export function getMeetings() {
  return client.query({
    query: MEETINGS_QUERY
  }).then(response => response.data.meetings);
}

const ADD_METING = gql`
mutation createMeeting($initDate: Date!){
  createMeeting(from:$initDate){
    id
  }
}
`;

export function saveMeeting(date) {
  // ADD_METING({variables: date});
  return client.mutate({
    mutation: ADD_METING,
    variables:  { initDate: date }
  }).then(response => response.data.feed);
}