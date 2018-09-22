'use strict';
//debugger
const debug = require('debug')('api');

//create new express router
import express from 'express';
const router = express.Router();

//dynamic modelFinder to send router to correct model in api calls
import modelFinder from '../middleware/modelFinder';
router.param('model', modelFinder);

router.post('/api/v1/:model', (req, res, next) => {
  console.log(req.body);
  let record = new req.model(req.body);
  record.save()
    .then(data => res.status(200).json(data).end())
    .catch(next);
});

export default router;
