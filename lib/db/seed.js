const Champ = require('../../models/Champ');
const db = require('.');

const seed = async () => {
  await db.sync({ force: true }); //sync to your database!

  const champ1 = await Champ.create({
    name: 'Nocturne',
    title: 'The eternal nightmare',
    nation: 'Runeterra',
    role: 'Assassin',
  });

  db.close(); //close your db connection else the connection stays alive else your process hangs.
  console.log('Seed Successful!'); //Have a prompt to let you know everything is working correctly!
};

module.exports = seed;
