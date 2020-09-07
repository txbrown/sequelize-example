const db = require('../lib/db');
const { Sequelize } = require('sequelize');

const Champ = db.define('champs', {
  // Model attributes are defined here
  name: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  nation: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.STRING,
  },
});

// `sequelize.define` also returns the model
console.log(Champ === db.models.Champ); // true

module.exports = Champ;
