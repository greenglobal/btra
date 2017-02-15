/*
  App config
  @ndaidong
*/

var {
  name = '',
  version = '',
  description = ''
} = require('./../package.json');

var config = {
  name,
  version,
  description
};

config.storeDir = './storage';

config.destinationServer = {
  target: '',
  username: '',
  password: ''
};


module.exports = config;
