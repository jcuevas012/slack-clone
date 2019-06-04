import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const PORT = 8081;
const SECRET = '2jshdjhjdhja38sdjahdjhds';
const SECRET2 = 'ds2141jhahjanbcaodhashdmnfdacanc';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    SECRET,
    SECRET2,
    user: { id: 1 }
  },
  dataSources: () => ({ models }),
});

models.sequelize.sync().then(() => {
  server.listen(PORT);
  console.log(`🚀  Server ready at port ${PORT}`);
});
