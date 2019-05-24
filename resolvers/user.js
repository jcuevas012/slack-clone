import bcrypt from 'bcrypt';

export default {
  Query: {
    getUser: (_, args, { dataSources }) => dataSources.models.User.findByPk(args.id),
    allUsers: (_, args, { dataSources }) => dataSources.models.User.findAll(),
  },
  Mutation: {
    register: async (_, { newUser }, { dataSources }) => {
      const hash = await bcrypt.hash(newUser.password, 12);
      const user = await dataSources.models.User.create({ ...newUser, password: hash });
      return {
        code: 200,
        user,
        message: 'User created success',
      };
    },
  },
};
