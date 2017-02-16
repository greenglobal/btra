#!/usr/bin/env node
/**
  BodyTrace checker - CLI
  @ndaidong
*/

const promiseFinally = require('promise.prototype.finally');
promiseFinally.shim();

const commander = require('commander');

const {
  version
} = require('./configs');

const {
  setDSConfig,
  sendRequest
} = require('./utils');

commander
  .version(version)
  .command('set')
  .description('Specify target URL and the credentials for authenticating')
  .option('-u, --url [url]', 'define URL to send request to')
  .option('-e, --email [email]', 'define email to authenticate')
  .option('-p, --password [password]', 'define password to authenticate')
  .action((opts = {}) => {
    let {
      url = '', email = '', password = ''
    } = opts;
    let o = {
      url: String(url),
      email: String(email),
      password: String(password)
    };
    return setDSConfig(o);
  });

commander
  .version(version)
  .command('request')
  .description('Send request to target URL with sample data')
  .option('-c, --count [count]', 'define number of requests to send')
  .action((opts = {}) => {
    let {
      count = 1
    } = opts;
    return sendRequest(count);
  });

commander.parse(process.argv);
