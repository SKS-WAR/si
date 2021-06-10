const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

//Import Routes
const genereRoute = require('./Routes/genereRoute');
const movieRoute = require('./Routes/movieRoute');

dotenv.config();

//Middleware
app.use(express.json());
const corsOptions = {
    exposedHeaders: 'auth-token', 
  };
  
app.use(cors(corsOptions));

//Routes Midddlewares
app.use('/', genereRoute);
app.use('/', movieRoute);

module.exports = app;