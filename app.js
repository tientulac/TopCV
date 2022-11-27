'use strict';
//Mã hóa môi trường ENV
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
//swagger list API

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//--------------------------------------------------------CORS---------------------------------------------------
app.use(cors());
app.use(cors({origin: 'http://localhost:4200/'}));
app.use(function(req, res, next) {
    console.log("enable cor successfully !!");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


module.exports = app;


