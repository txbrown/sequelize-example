const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/champs', {
  logging: false,
}); //logging false would prevent outpitting SQL to the console on exection. Log true to see what you get!

const ping = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

ping();

module.exports = db;
