'use strict';

import requireAll from 'require-dir';

const models = requireAll('../models');

let modelFinder = (req, res, next) => {
  try {
    let model = req && req.params && req.params.model;
    console.log(models[model]);
    if (model && models[model] && models[model].default){
      req.model = models[model].default;
      next();
    } else {
      throw new Error ('Model not found');
    }
  } catch (error) {
    throw error;
  }
};

export default modelFinder;


