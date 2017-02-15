/**
  BodyTrace checker - CLI
  utils/store
  @ndaidong
*/

const fs = require('fs');

const mkdirp = require('mkdirp').sync;

const {
  storeDir,
  destinationServer
} = require('../configs');

const {
  read,
  write
} = require('./readwrite');


const getParams = () => {
  let fpath = `${storeDir}/destination.json`;
  if (fs.existsSync(fpath)) {
    return read(fpath);
  }
  return destinationServer;
};

const updateParams = (opts) => {

  let hasChanged = false;

  let {
    target = '',
    username = '',
    password = ''
  } = opts;

  let {
    target: _target,
    username: _username,
    password: _password
  } = destinationServer;

  if (target && target !== _target) {
    destinationServer.target = target;
    hasChanged = true;
  }
  if (username && username !== _username) {
    destinationServer.username = username;
    hasChanged = true;
  }
  if (password && password !== _password) {
    destinationServer.password = password;
    hasChanged = true;
  }

  if (hasChanged) {
    if (!fs.existsSync(storeDir)) {
      mkdirp(storeDir);
    }
    let fpath = `${storeDir}/destination.json`;
    write(fpath, destinationServer);
  }
};

module.exports = {
  updateParams,
  getParams
};
