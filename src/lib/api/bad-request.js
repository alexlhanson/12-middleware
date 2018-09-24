'use strict';

// //create new express router
// import express from 'express';
// const router = express.Router();

export default (req, res, next) => {
  res.status(404).send('ERROR: Bad request').end();
};

// export default router.use((req, res, next) => {
//   res.status(404);
//   res.send('Bad Request');
//   res.end();
// });