'use strict';
//debugger
const debug = require('debug')('api');

//create new express router
import express from 'express';
const router = express.Router();

//dynamic modelFinder to send router to correct model in api calls
import modelFinder from '../middleware/modelFinder';
import Neighborhood from '../models/neighborhood';
router.param('model', modelFinder);

router.post('/api/v1/:model', (req, res, next) => {
  let record = new req.model(req.body);
  console.log('hi');
  record.save()
    .then(data => res.status(200).json(data).end())
    .catch(next);
});

router.get('/api/v1/:model/:id', (req, res, next) => {
  console.log(req.model);
  req.model.fetchOne(req.params.id)
    .then(data => res.status(200).json(data).end())
    .catch(next);
});

router.delete('/api/v1/:model/:id', (req, res, next) => {
  if (!req.params.id) {
    res.statusCode = '400';
    res.write(`TypeError: cannot delete resource of blank id`);
    res.end();
  } else {
    req.model.delete(req.params.id)
      .then(msg => {
        res.status(200);
        res.statusMessage = 'DELETE SUCCESSFUL';
        res.send(msg);
      })
      .catch(next);
  }
});

router.put('/api/v1/:model/:id', (req, res, next) => {
  req.model.fetchOne(req.params.id)
    .then(data => req.model.update(req.body, data))
    .then(data => res.status(200).json(data).end())
    .catch(next);
});

export default router;
