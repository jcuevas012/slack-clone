import { gql } from 'apollo-server'

export default gql`
  type Team {
    id: ID!
    name: String!
    owner: User
    members: [User!]!
    channels: [Channel!]!
  }

  type TeamMutationResponse implements MutationResponseInterface {
    code: String!
    success: Boolean!
    message: String!
    errors: [Error]
  }

  extend type Mutation {
    createTeam(name: String!): TeamMutationResponse
  }

  extend type Query {
    teams: [Team!]!
  }
`
