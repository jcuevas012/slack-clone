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

  type ChannelMutationResponse implements MutationResponseInterface {
    code: String!
    success: Boolean!
    message: String!
    errors: [Error]
  } 
  
  extend type Mutation {
    createChannel(newChannel: channelInput!): ChannelMutationResponse
  }
`;
