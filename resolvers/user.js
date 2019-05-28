import bcrypt from 'bcrypt';
import util from '../util';

export default {
  Query: {
    getUser: (_, args, { dataSources }) => dataSources.models.User.findByPk(args.id),
    allUsers: (_, args, { dataSources }) => dataSources.models.User.findAll(),
  },
  Mutation: {
    register: async (_, { newUser }, { dataSources: { models } }) => {
      try {
        const hash = await bcrypt.hash(newUser.password, 12);
        const user = await models.User.create({ ...newUser, password: hash });
        return {
          code: 200,
          user,
          message: 'User created success',
        };
      } catch (error) {
        return {
          code: 500,
          message: 'Something went wrong',
          errors: util.formatErrors(error, models),
        };
      }
    },
  },
};
