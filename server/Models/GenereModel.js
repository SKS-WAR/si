const db = require('../Database/connect');
const Sequelize = require('sequelize');

let Genere = db.define('genere', {

    name: {
        type: Sequelize.STRING,
        alowNull: false
    },
    imgurl: {
        type: Sequelize.TEXT,
        alowNull: false
    },
}, {
    timestamps: false
});
db.sync().then(res=>{
    console.log('Genere db has been created');
});

module.exports = Genere;