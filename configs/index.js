var pkg = require('./../package.json');

var env = process.env || {}; // eslint-disable-line no-process-env

var debug = require('debug');
var error = debug('app:error');

[
  'NODE_ENV',
  'APP_PORT',
  'SOCKET_HOST',
  'SOCKET_PORT',
  'REQUEST_TARGET'
].forEach((name) => {
  if (!env[name]) {
    error(`Environment variable ${name} is missing, use default instead.`);
  }
});

var config = {
  ENV: env.NODE_ENV || 'development'
};

config.name = pkg.name || '';
config.version = pkg.version || '';
config.description = pkg.description || '';

config.baseDir = env.BASE_DIR || '/';

config.port = env.APP_PORT || '9918';
config.REQUEST_TARGET = env.REQUEST_TARGET;

config.pusher = {
  host: env.SOCKET_HOST || '127.0.0.1',
  port: env.SOCKET_PORT || '9919',
  event: 'message'
};

module.exports = config;
