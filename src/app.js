'use strict';

// middleware imports
const debug = require('debug')('app');
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//declare app module
let app = express();

//middleware chain
app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

//endpoint middleware
import router from './lib/api/api'; 
import errHandler from './lib/api/err-handler';

// app.use(router);
// app.use(errHandler);

//module export uses ES5 because of compatibility issues
module.exports = app;
