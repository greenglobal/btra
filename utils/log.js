/**
  BodyTrace checker - CLI
  utils/log
  @ndaidong
*/

const chalk = require('chalk');
const logInfo = chalk.white;
const logError = chalk.red;
const logSuccess = chalk.green;
const logHeader = chalk.bold.magenta;
const logLine = chalk.cyan;

const {
  ENV
} = require('../configs');

let isTestMode = ENV === 'test';

const info = (text) => {
  if (!isTestMode) {
    console.log(logInfo(text));
  }
};

const error = (text) => {
  if (!isTestMode) {
    console.log(logError(text));
  }
};

const success = (text) => {
  if (!isTestMode) {
    console.log(logSuccess(text));
  }
};

const header = (text) => {
  if (!isTestMode) {
    console.log(logHeader(text));
  }
};

const line = (text) => {
  if (!isTestMode) {
    console.log(logLine(text));
  }
};

module.exports = {
  info,
  error,
  success,
  header,
  line
};
