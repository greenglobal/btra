/**
 Group methods
 */

const {
  read,
  write
} = require('./readwrite');

const {
  updateParams,
  getParams
} = require('./store');

module.exports = {
  read,
  write,
  updateParams,
  getParams
};
