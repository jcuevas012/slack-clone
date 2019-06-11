import _ from 'lodash';
import jwt from 'jsonwebtoken';
import { refreshTokens } from './auth';

const formatErrors = (e) => {
  if (e && e.name.includes('Sequelize')) {
    return e.errors.map(x => _.pick(x, ['path', 'message']));
  }
  return [{ path: 'unknow', messge: 'Something went wrong' }];
};

const getUserFromRequest = async (req, res, SECRET, SECRET2, models) => {
  const token = req.headers['x-token'];

  if (token) {
    try {
      const { user } = jwt.verify(token, SECRET);
      return user;
    } catch (error) {
      const refreshToken = req.headers['x-refresh-token'];
      const newTokens = await refreshTokens(token, refreshToken, models, SECRET, SECRET2);
      if (newTokens.token && newTokens.refreshToken) {
        res.set('Access-Control-Expose-Headers', 'x-token, x-refresh-token');
        res.set('x-token', newTokens.token);
        res.set('x-refresh-token', newTokens.refreshToken);
      }
      req.user = newTokens.user;
    }
  }
};

module.exports = {
  formatErrors,
  getUserFromRequest,
};
