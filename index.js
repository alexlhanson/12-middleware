'use strict';

//start env
require('dotenv').config();

//start babel
require('babel-register')({
  presets: ['env'],
});

//start server
const app = require('./src/app');
app.listen(process.env.PORT, () => {
  console.log(`Server is up and running on PORT ${process.env.PORT}`);
});
