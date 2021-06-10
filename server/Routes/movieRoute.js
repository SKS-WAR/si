const express = require('express');
const router = express.Router();

const movie = require('../Controllers/MovieController');

//Add Artist
// router.post('/movie', movie.create);

//Get all movie
router.get('/movies', movie.findAll);

//Update popularity 
router.patch('/movie/:id', movie.update)


//test movie
router.get('/test', movie.test);


module.exports = router;