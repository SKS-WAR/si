const genere = require('../Models/GenereModel');
const movie = require('../Models/MovieModel');
const Sequelize = require('sequelize');
//Create genere
exports.create = async (req, res) => {
    try {
        let generes = await genere.create({
            generename: req.body.generename,
            imgurl: req.body.imgurl,
        })
        res.status(200).send(generes);
    } catch (error) {
        res.status(400).send(error);
    }
}

//Fetch all generes 

exports.findAll = async (req, res) => {
    try {
        let generes = await genere.findAll({
            // attributes: ["generename", "imgurl"]
        })
        res.status(200).send(generes)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.update = (req, res) => {
    try {
        genere.sync()
        .then(() => genere.update({popularity: Sequelize.literal('popularity + 1')}, {where: {id : req.params.id}}));
        res.status(200).send("increment")
    } catch (error) {
        res.status(400).send(error);
    }
    
}

exports.movie = async (req, res) => {
    try {
        let generes = await movie.findAll({
            // attributes: ["generename", "imgurl"]
            where: {
                generename: req.params.id
            }
        })
        res.status(200).send(generes)
    } catch (error) {
        res.status(400).send(error)
    }
    
}


exports.add = async (req, res) => {
    let arr = ["Biography",
        "Adventure",
        "Comedy",
        "Drama",
        "Action",
        "Animation",
        "Crime",
        "Mystery" ]

    
          
    try {
        for (let i = 0; i < arr.length; i++) { 
            console.log(arr[i]);
        
            let generes = await genere.create({
                name: arr[i],
                imgurl: "NA",
            })
        }
        res.status(200).send("generes added");
    } catch (error) {
        res.status(400).send(error);
    }
}