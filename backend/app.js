const express = require('express');
const app = express();

const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const errorMiddleware = require('./middlewares/errors');

//Setting up config file
dotenv.config({path: 'config/.env'})

app.use(express.json({limit:'50mb'}));

app.use(express.urlencoded({limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());
app.use(fileUpload());

//Route Imports


//API


//Middleware to handle errors
app.use(errorMiddleware);


module.exports = app