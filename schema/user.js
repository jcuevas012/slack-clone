import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int!
    email: String!
    username: String!
    teams: [Team!]!
  }

  input userInput {
    email: String!
    username: String!
  }

  extend type Query  {
    getUser(id: Int!): User
    allUsers: [User] 
  }

  extend type Mutation {
    createUser(newUser: userInput!): User
  }
`;
