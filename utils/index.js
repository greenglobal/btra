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

const {
  error,
  info,
  success,
  header,
  line
} = require('./log');

const {
  getRandomIMEI
} = require('./imei');

const {
  getRamdomMessage,
  getRandomMsgType,
  getRandomSafeMsgType
} = require('./message');

module.exports = {
  read,
  write,
  error,
  info,
  success,
  header,
  line,
  setDSConfig,
  getDSConfig,
  sendRequest,
  getRandomIMEI,
  getRamdomMessage,
  getRandomMsgType,
  getRandomSafeMsgType
};
