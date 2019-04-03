
module.exports = `
  type Team {
    owner: User
    members: [User!]!
    channels: [Channel!]!
  }

  type Channel {
    id: Int!
    messages: [Message]
    public: Boolean!
    name: String!
    users: [User!]!
  }

  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }

  type User {
    id: Int!
    email: String!
    username: String!
    teams: [Team!]!
  }

  type Query {
      hi: String
  }
`;
