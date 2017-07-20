#!/usr/bin/env node
/**
  BodyTrace checker - CLI
  @ndaidong
*/

global.Promise = require('promise-wtf');

const commander = require('commander');

const {
  version
} = require('./configs');

const {
  setDSConfig,
  getDSConfig,
  sendRequest,
  info
} = require('./utils');

commander
  .version(version)
  .command('get')
  .description('Get current target URL and the credentials')
  .action(() => {
    let o = getDSConfig();
    for (let k in o) {
      if (o[k]) {
        info(`${k}: ${o[k]}`);
      }
    }
    return o;
  });

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
