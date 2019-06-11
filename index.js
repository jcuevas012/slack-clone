import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';
import { getUserFromRequest } from './services/util';


require('dotenv').config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const SECRET2 = process.env.SECRET2;

const app = express();
const path = '/graphql';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => ({
    SECRET,
    SECRET2,
    user: await getUserFromRequest(req, res, SECRET, SECRET2, models),
  }),
  dataSources: () => ({ models }),
});

server.applyMiddleware({ app, path });

models.sequelize.sync().then(() => {
  app.listen(PORT);
  console.log(`🚀  Server ready at port ${PORT}`);
});
