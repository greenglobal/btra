/**
  BodyTrace checker - CLI
  utils/store
  @ndaidong
*/

const fs = require('fs');

const bella = require('bellajs');
const chalk = require('chalk');
const mkdirp = require('mkdirp').sync;
const config = require('../configs');

const log = chalk.italic.white;

const info = (text) => {
  console.log(log(text));
};

const {
  storeDir,
  destinationServerFile,
  destinationServer: defaultServer
} = config;

const {
  read,
  write
} = require('./readwrite');


const getParams = () => {
  let fpath = `${storeDir}/${destinationServerFile}`;
  return read(fpath) || defaultServer;
};

const updateParams = (opts = {}) => {

  let hasChanged = false;

  let {
    url = '',
    email = '',
    password = ''
  } = opts;

  let destinationServer = getParams();

  let {
    url: _url,
    email: _email,
    password: _password
  } = destinationServer;

  if (url && bella.isString(url) && url !== _url) {
    destinationServer.url = String(url);
    info('New url detected.');
    hasChanged = true;
  }
  if (email && bella.isString(email) && email !== _email) {
    destinationServer.email = String(email);
    info('New email detected.');
    hasChanged = true;
  }
  if (password && bella.isString(password) && password !== _password) {
    destinationServer.password = String(password);
    info('New password detected.');
    hasChanged = true;
  }

  if (hasChanged) {
    if (!fs.existsSync(storeDir)) {
      mkdirp(storeDir);
    }
    let fpath = `${storeDir}/destination.json`;
    let re = write(fpath, destinationServer);
    if (re) {
      info('Saved destination server info.');
      return true;
    }
  }
  info('Nothing changed.');
  return false;
};

module.exports = {
  updateParams,
  getParams
};
