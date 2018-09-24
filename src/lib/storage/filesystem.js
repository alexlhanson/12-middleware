'use strict';

const storage = {};
const databaseDir = `${__dirname}/data`;

import fs from 'fs';

storage.save = data => {
  return new Promise((resolve, reject) => {
    if (!data.id) { reject('Error: No data id provided'); }

    let file = `${databaseDir}/${data.id}`;
    let text = JSON.stringify(data);
    fs.writeFile(file, text, (err => {
      if (err) reject('Error: Not writing to file');
      resolve(data);
    }));
  });
};

storage.fetchOne = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) { reject('Error: No id provided'); }
    let file = `${databaseDir}/${id}`;

    fs.readFile(file, (err, data) => {
      if (err) reject('Error: file not read');
      resolve(JSON.parse(data.toString()));
    });
  });
};

storage.delete = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) { reject('Error: No id provided'); }
    let file = `${databaseDir}/${id}`;

    fs.unlink(file, (err) => {
      if (err) reject('Error: file not deleted');
      resolve('success');
    });
  });
};

storage.update = (update, data) => {
  return new Promise((resolve, reject) => {
    let dataKeys = Object.keys(update);
    let file = `${databaseDir}/${data.id}`;
    
    dataKeys.forEach(key => {
      if (data[key]) {
        data[key] = update[key];
      }
    });
    
    let text = JSON.stringify(data);
    
    fs.unlink(file, (err) => {
      if (err) reject ('ERROR: file not rewritten');
    });
    
    fs.writeFile(file, text, (err => {
      if (err) reject('Error: Not writing to file');
      resolve(data);
    }));
  });
};

export default storage;