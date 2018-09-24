'use strict';

export default (err, req, res, next) => {
  res.status(500).send('ERROR Internal server error');
};