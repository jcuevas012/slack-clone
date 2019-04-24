import { gql } from 'apollo-server';

export default gql`
  
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }

  
  extend type Mutation {
    createMessage (text: String!, channelId: Int!): Message 
  }
`;
