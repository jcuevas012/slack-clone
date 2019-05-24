import lodash from 'lodash';

import rootResolver from './rootResolvers';
import userResolver from './user';
import teamResolver from './team';
import channelResolver from './channel';
import messageResolver from './message';

export default lodash.merge(rootResolver, userResolver, teamResolver, channelResolver, messageResolver);
