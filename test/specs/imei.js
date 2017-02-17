/**
 * Testing
 * @ndaidong
 */

var test = require('tape');
var bella = require('bellajs');

var {
  getRandomIMEI
} = require('../../utils');

test('Check utils/imei --> getRandomIMEI()', (assert) => {

  let imei = getRandomIMEI();
  assert.ok(bella.isString(imei), 'IMEI must be a string');
  assert.ok(imei.length > 6, 'IMEI must be longer than 6 characters');
  assert.ok(imei.match(/\d+/), 'IMEI must contain only number');
  assert.end();
});
