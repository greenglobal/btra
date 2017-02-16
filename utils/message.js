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

var UNITS = [
  '862117020153473',
  '862117020153474',
  '862117020153475',
  '862117020153476',
  '862117020153477',
  '862117020153478',
  '862117020153479',
  '862117020153480'
];

var fs = require('fs');
var bella = require('bellajs');

var load = (type) => {
  let file = `./data/samples/${type}.json`;
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

var loadUnits = () => {
  let file = `./data/imei.json`;
  if (fs.existsSync(file)) {
    let s = fs.readFileSync(file, 'utf8');
    UNITS = JSON.parse(s);
  }
};

loadUnits();

var getAllUnits = () => {
  return bella.stabilize(UNITS);
};

var getRandomIMEI = () => {
  return getAllUnits().pick();
};

module.exports = {
  getRamdomMessage,
  getRandomMsgType,
  getRandomSafeMsgType,
  getRandomIMEI
};
