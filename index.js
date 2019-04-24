import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const PORT = 8081;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    user: { id: 1 }
  },
  dataSources: () => ({ models }),
});

models.sequelize.sync().then(() => {
  server.listen(PORT);
  console.log(`🚀  Server ready at port ${PORT}`);
});
