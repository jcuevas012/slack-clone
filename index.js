const { ApolloServer, gql } = require('apollo-server');
const schema = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models');

const PORT = 8081;

const typeDefs = gql(schema);
const server = new ApolloServer({ typeDefs, resolvers });

models.sequelize.sync().then(() => {
  server.listen(PORT);
  console.log(`🚀  Server ready at port ${PORT}`);
});
