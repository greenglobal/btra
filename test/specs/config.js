/**
 * Testing
 * @ndaidong
 */

var test = require('tape');
var bella = require('bellajs');

var config = require('../../configs');

test('Check app config', (assert) => {
  assert.ok(bella.isObject(config), 'App config must be an object');
  assert.ok(bella.hasProperty(config, 'name'), 'Config must have name');
  assert.ok(bella.hasProperty(config, 'version'), 'Config must have version');
  assert.end();
});
