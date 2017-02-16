/**
 Group methods
 */

const {
  read,
  write
} = require('./readwrite');

const {
  setDSConfig,
  getDSConfig
} = require('./store');

const {
  sendRequest
} = require('./analyze');

module.exports = {
  read,
  write,
  setDSConfig,
  getDSConfig,
  sendRequest
};
