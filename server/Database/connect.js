const Sequelize = require('sequelize');

// const db = new Sequelize('cityonline', 'sks', 'sks', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

const db = new Sequelize("postgres://postgres:test123@localhost/sks", {
  dialect: 'postgres'
  // anything else you want to pass
})

// const db = new Sequelize("postgres://evacigaketwoor:5f1d37487935bad4853d45f44e7c50fcd97e396bbc9267302b2085424c88e70d@ec2-54-74-14-109.eu-west-1.compute.amazonaws.com:5432/dffjgmkqa8ttg9", {
//   dialect: 'postgres',
//   protocol: 'postgres',
//   ssl: true,
// })


module.exports = db;
