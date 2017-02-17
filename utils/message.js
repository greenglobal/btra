/**
  BodyTrace checker - CLI
  utils/message
  @ndaidong
*/

const TYPES = [
  'activateDevice',
  'deactivateDevice',
  'resetData',
  'resetDevice',
  'resetRedFlag',
  'setCalibration',
  'setClockAlignment',
  'updateThresHold',
  'updateTransmissionRate'
];

var SAFE_TYPES = [
  'clockRequest',
  'gpsRequest',
  'memoryRead',
  'statusRequest-cascade',
  'statusRequest-outpour'
];

var fs = require('fs');
var path = require('path');
var bella = require('bellajs');

var load = (type) => {
  let file = path.resolve(__dirname, `../data/samples/${type}.json`);
  if (fs.existsSync(file)) {
    let s = fs.readFileSync(file, 'utf8');
    return JSON.parse(s);
  }
  return null;
};

var getAllMsgTypes = () => {
  return bella.stabilize(TYPES.concat(SAFE_TYPES));
};

var getAllSafeMsgTypes = () => {
  return bella.stabilize(SAFE_TYPES);
};

var getRandomMsgType = () => {
  return getAllMsgTypes().pick();
};

var getRandomSafeMsgType = () => {
  return getAllSafeMsgTypes().pick();
};

var getRamdomMessage = (t = false) => {
  let type = t || getRandomSafeMsgType();
  return load(type);
};

module.exports = {
  getRamdomMessage,
  getRandomMsgType,
  getRandomSafeMsgType
};
