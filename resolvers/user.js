export default {
  Query: {
    getUser: (_, args, { dataSources }) => dataSources.models.User.findByPk(args.id),
    allUsers: (_, args, { dataSources }) => dataSources.models.User.findAll(),
  },
  Mutation: {
    createUser: async (_, args, { dataSources }) => {
      const createdUser = await dataSources.models.User.create(args.newUser);
      return createdUser;
    },
  },
};
