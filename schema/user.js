import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int!
    email: String!
    username: String!
    teams: [Team!]!
  }

  type MutationResponse implements MutationResponseInterface {
    code: String!
    success: Boolean!
    message: String!
    user: User
    errors: [Error!]
  }

  input userInput {
    email: String!
    username: String!
    password: String!
  }

  extend type Query  {
    getUser(id: Int!): User
    allUsers: [User] 
  }

  extend type Mutation {
    register(newUser: userInput!): MutationResponse
  }
`;
