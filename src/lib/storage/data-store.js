'use strict';

import memory from '../storage/memory.js';
import filesystem from '../storage/filesystem.js';

let dataStorageModule = {};

switch (process.env.STORAGE) {
case 'filesystem':
  dataStorageModule = filesystem;
  break;
default:
  dataStorageModule = memory;
  break;
}

export default dataStorageModule;
