import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
{
  feed {
    links {
      id
      createdAt
      url
      description
    }
  }
}
`
export function getMembers(){
    return client.query({
        query: gql`
          {
            feed {
              links {
                id
              }
            }
          }
        `
      }).then(response => console.log(response.data.allLinks));
}