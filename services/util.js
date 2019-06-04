import _ from 'lodash';

export default {
    formatErrors: (e, models) => {
        if (e && e.name.includes('Sequelize')) {
            return e.errors.map(x => _.pick(x, ['path', 'message']));
        }

        return [{ path: 'unknow', messge: 'Something went wrong' }];
    },
};