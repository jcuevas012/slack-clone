import { gql } from 'apollo-server';

const typeDef = gql`
  type Query {
    _:String
  }

  type Mutation {
    _:String
  }

  interface MutationResponseInterface {
    code: String!
    success: Boolean!
    message: String!
  }
`;

module.exports = {
  typeDef,
};
