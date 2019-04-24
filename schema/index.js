import userQuery from './user';
import teamQuery from './team';
import channelQuery from './channel';
import messageQuery from './message';

const { typeDef: rootQuery } = require('./rootQuery');


export default [rootQuery, userQuery, teamQuery, channelQuery, messageQuery];
