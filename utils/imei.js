/**
  BodyTrace checker - CLI
  utils/imei
  @ndaidong
*/

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
var path = require('path');

var {stabilize} = require('stabilize.js');

var loadUnits = () => {
  let file = path.resolve(__dirname, `../data/imei.json`);
  if (fs.existsSync(file)) {
    let s = fs.readFileSync(file, 'utf8');
    UNITS = JSON.parse(s);
  }
};

loadUnits();

var getAllUnits = () => {
  return stabilize(UNITS);
};

var getRandomIMEI = () => {
  return getAllUnits().pick();
};

module.exports = {
  getRandomIMEI
};
