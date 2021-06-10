const db = require('../Database/connect');
const Sequelize = require('sequelize');

let Movie = db.define('movie', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    generename: {
        type: Sequelize.STRING,
        // alowNull: false,
        // references: 'genere', //table name
        // referencesKey: 'name'   // column name in the table
    },
    name: {
        type: Sequelize.STRING,
        alowNull: false
    },
    releaseYear: {
        type: Sequelize.STRING,
        alowNull: false
    },
    rating: {
        type: Sequelize.STRING,
        alowNull: false
    },
    imgurl: {
        type: Sequelize.STRING,
        alowNull: false
    },
}, {
    timestamps: false
});
db.sync().then(res=>{
    console.log('movie db has been created');
});

module.exports = Movie;