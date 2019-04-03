
const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.db);

const models = {
  user: sequelize.import('./users'),
  channel: sequelize.import('./channel'),
  message: sequelize.import('./message'),
  team: sequelize.import('./team'),
  member: sequelize.import('./member'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
