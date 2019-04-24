export default {
  Mutation: {
    createTeam: async (_, args, { dataSources, user }, info) => {
      const newTeam = await dataSources.models.Team.create({ ...args, owner: user.id });
      return newTeam;
    },
  },
};
