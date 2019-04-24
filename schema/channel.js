import { gql } from 'apollo-server';

export default gql`
  type Channel {
    id: Int!
    messages: [Message]
    public: Boolean!
    name: String!
    users: [User!]!
  }


  input channelInput {
    name: String!
    teamId: Int!
    public: Boolean = false
  }

  
  extend type Mutation {
    createChannel(newChannel: channelInput!): Channel
  }
`;
