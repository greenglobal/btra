#!/usr/bin/env node
/**
  BodyTrace checker - CLI
  @ndaidong
*/

const commander = require('commander');
const chalk = require('chalk');

const {
  version
} = require('./configs');

const {
  updateParams
} = require('./utils');

var sendRequest = (args) => {
  chalk.white(args);
};

commander
  .version(version)
  .command('set')
  .description('Specify target URL and the credentials for authenticating')
  .option('-u, --url [url]', 'define URL to send request to')
  .option('-e, --email [email]', 'define email to authenticate')
  .option('-p, --password [password]', 'define password to authenticate')
  .action((opts) => {
    let {
      url = '', email = '', password = ''
    } = opts;
    let o = {
      url: String(url),
      email: String(email),
      password: String(password)
    };
    return updateParams(o);
  });

commander
  .version(version)
  .command('request')
  .description('Send request to target URL with sample data')
  .option('-c, --count', 'define number of requests to send')
  .action((count = 1) => {
    console.log(count);
  });

commander.parse(process.argv);
