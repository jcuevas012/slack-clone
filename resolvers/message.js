export default {
  Mutation: {
    createMessage: async (_, args, { dataSources, user }, info ) => {
      const newMessage = dataSources.models.Message.create({ ...args, userId: user.id });
      return newMessage;
    },
  },
};
