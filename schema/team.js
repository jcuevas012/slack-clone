import { gql } from 'apollo-server';

export default gql`

  type Team {
    name: String!
    owner: User
    members: [User!]!
    channels: [Channel!]!
  }


  
  extend type Mutation {
    createTeam(name: String!): Team
  }

`;
