/*
  App config
  @ndaidong
*/

var env = process.env || {}; // eslint-disable-line no-process-env

var {
  name = '',
  version = '',
  description = ''
} = require('./../package.json');

var config = {
  name,
  version,
  description,
  ENV: env.NODE_ENV || 'development'
};

config.storeDir = './storage';
config.destinationServerFile = 'destination.json';

if (config.ENV === 'test') {
  config.destinationServerFile = 'destination-test.json';
}

config.destinationServer = {
  url: '',
  email: '',
  password: ''
};


module.exports = config;
