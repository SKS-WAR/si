const express = require('express');
const router = express.Router();

const genere = require('../Controllers/GenereController');

//Add Artist
router.post('/genere', genere.create);

//Get all genere
router.get('/genere', genere.findAll);

//Update popularity 
router.put('/popularity/:id', genere.update)

router.get('/addGenere', genere.add);
router.get('/genere/:id', genere.movie);

module.exports = router;