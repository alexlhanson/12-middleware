'use strict';
//debugger
const debug = require('debug')('neighborhood');

import storage from '../storage/data-store';
import uuid from 'uuid';

class Neighborhood{
  
  constructor(config){
    this.id = uuid();
    this.createdOn = new Date();
    this.name = config && config.name || '';
    this.population = config && config.population || '';
    this.use = config && config.use;
  }

  save(){
    return storage.save(this);
  }

  static fetchOne(id){
    return storage.fetchOne(id);
  }

  static delete(id){
    return storage.delete(id);
  }

  static update(update, data){
    return storage.update(update, data);
  }
}

export default Neighborhood;