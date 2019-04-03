const { ApolloServer, gql } = require('apollo-server');
const schema = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models');

const PORT = 8081;

const typeDefs = gql(schema);
const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
