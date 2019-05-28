import { gql } from 'apollo-server';

const typeDef = gql`
  type Query {
    _:String
  }

  type Mutation {
    _:String
  }

  type Error {
    path: String!
    message: String!
  }
  
  interface MutationResponseInterface {
    code: String!
    success: Boolean!
    message: String!
    errors: [Error]
  }
`;

module.exports = {
  typeDef,
};
