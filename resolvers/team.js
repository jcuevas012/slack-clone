import util from '../services/util';

export default {
  Mutation: {
    createTeam: async (_, args, { dataSources, user }, info) => {
      try {

        await dataSources.models.Team.create({ ...args, owner: user.id });
        return {
          code: 200,
          success: true,
          message: 'Team created successfully',
        };
      } catch (error) {
        return {
          code: 500,
          message: 'Something went wrong',
          errors: util.formatErrors(error, dataSources.models),
        };
      }
    },
  },
};
