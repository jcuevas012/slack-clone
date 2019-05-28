import userSchema from './user';
import teamSchema from './team';
import channelSchema from './channel';
import messageSchema from './message';

const { typeDef: rootSchema } = require('./rootQuery');


export default [rootSchema, userSchema, teamSchema, channelSchema, messageSchema];
