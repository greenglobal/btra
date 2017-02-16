/**
 * Testing
 * @ndaidong
 */

var test = require('tape');
var bella = require('bellajs');

var config = require('../../configs');

var hasProp = (name, check) => {
  check.ok(bella.hasProperty(config, name), `... must have the property "${name}"`);
};

test('Check app config', (assert) => {
  assert.ok(bella.isObject(config), 'App config must be an object, and');
  [
    'name',
    'version',
    'ENV',
    'storeDir',
    'destinationServerFile',
    'destinationServer'
  ].map((key) => {
    return hasProp(key, assert);
  });

  assert.end();
});
