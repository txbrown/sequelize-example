const Champ = require('./models/Champ');
const db = require('./lib/db');
const seed = require('./lib/db/seed');

seed();

module.exports = {
  /* config options here */
};
