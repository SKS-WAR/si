const movie = require('../Models/MovieModel');
const genere = require('../Models/GenereModel');
const Sequelize = require('sequelize');
const csv = require('csv-parser');
const fs = require('fs');

//Create genere
exports.create = async (req, res) => {
    try {
        let movies = await movie.create({
            moviename: req.body.moviename,
            imgurl: req.body.imgurl,
        })
    } catch (error) {
        res.status(400).send(error);
    }
}

//Fetch all movies 

exports.findAll = async (req, res) => {
    try {
        let movies = await movie.findAll({order: [["id", "ASC"]]
    })
        res.status(200).send(movies)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.update = async (req, res) => {
    try {
        // movie.sync()
        // .then(() => movie.update({generename: req.body.generename,
        //         name: req.body.name,
        //         releaseYear: req.body.releaseYear,
        //         rating: req.body.rating,}, {where: {id : req.params.id}}));
        // res.status(200).send("movie updated")
        // console.log("movie")

        let movi = await movie.update({
            generename: req.body.generename,
            name: req.body.name,
            releaseYear: req.body.releaseYear,
            rating: req.body.rating,
        },{where: {id : req.params.id}})

        let m = await movie.findOne({where: {id: req.params.id}})
        res.status(200).send(m)

        // try {
        //     let movie = await movie.update(
        //         {
        //                 generename: req.body.generename,
        //                 name: req.body.name,
        //                 releaseYear: req.body.releaseYear,
        //                 rating: req.body.rating,
        //         },
        //       { where: { id: req.params.id } }
        //     )
        //     // res.status(200).send(movie)
        //     console.log(req.params.id)
        //   } catch (err) {
        //     // handleError(err)
        // }
        
          

    } catch (error) {
        console.log("error")
        res.status(400).send(error);
    }
    
}


//Dumb movie
exports.test = async (req, res) => {
    // try {
    //     let movies = await movie.create({
    //         name: req.body.name,
    //         imgurl: req.body.imgurl,
    //     })
    //     res.status(200).send(movies);
    // } catch (error) {
    //     res.status(400).send(error);
    // } 
    let temp = [];
    await fs.createReadStream('Controllers/Movies.csv')
        .pipe(csv())
        .on('data',  (row) => {
            // console.log(row.Genre);
                let movies =  movie.create({
                    name: row.Title,
                    imgurl: "NA",
                    generename: row.Genre,
                    rating: row.Rating,
                    releaseYear: row.Year
                });
                temp.push(movies)
                console.log(row)
        })
        .on('end', () => {
        console.log('CSV file successfully processed');
        });
    res.status(200).send(temp);
// 


}