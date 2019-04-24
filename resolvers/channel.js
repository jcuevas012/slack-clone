export default {
  Mutation: {
    createChannel: async (_, args, { dataSources }, info) => {
      const newChannel = await dataSources.models.Channel.create(args.newChannel);
      return newChannel;
    },
  },
};
