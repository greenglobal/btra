#!/usr/bin/env node
/**
  BodyTrace checker - CLI
  @ndaidong
*/

const vorpal = require('vorpal')();
const chalk = require('chalk');

const {
  updateParams
} = require('./utils/store');

const {
  name,
  version
} = require('./configs');

var setParameters = (args) => {
  let {options} = args;
  return updateParams(options);
};

var sendRequest = (args) => {
  chalk.white(args);
};

vorpal
  .command('set', 'Set parameters')
  .description('To set the required parameters')
  .option('-t, --target <url>', 'URL to send request to')
  .option('-u, --username <name>', 'Username to authenticate')
  .option('-p, --password <pass>', 'Password to authenticate')
  .action(setParameters);

vorpal
  .command('send', 'Send requests')
  .description('To send requests with sample data')
  .option('-t, --type <msgType>', 'Type of request to send', [
    'gmt_update', 'reset_device', 'reset_data'
  ])
  .option('-n, --number <count>', 'Number of requests to send')
  .option('-w, --wait <minute>', 'Max time to wait, in minute')
  .action(sendRequest);

vorpal
  .delimiter('iot$')
  .show();
