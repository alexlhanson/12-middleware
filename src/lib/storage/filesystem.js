'use strict';

const storage = {};
const databaseDir = `${__dirname}/data/`;

import fs from 'fs';

storage.save = data => {
  return new Promise ((resolve, reject) => {
    if(!data.id){reject('Error: No data id provided');}

    let file = `${databaseDir}/${data.id}`;
    let text = JSON.stringify(data);
    fs.writeFile(file, data, (err => {
      if (err) reject('Error: Not writing to file')
      resolve(data);
    }));
  });
};

export default storage;