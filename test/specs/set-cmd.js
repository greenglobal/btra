/**
 * Testing
 * @ndaidong
 */

var test = require('tape');
var bella = require('bellajs');

var {
  getDSConfig,
  setDSConfig
} = require('../../utils');

var ds = getDSConfig();
var onceDS = {
  url: 'https://google.com/api',
  email: 'test@mail.com',
  password: '12345678'
};

var hasProp = (name, check) => {
  check.ok(bella.hasProperty(ds, name), `... must have the property "${name}"`);
};

test('Get default destination server config', (assert) => {

  assert.ok(bella.isObject(ds), 'DS config must be an object, and');
  [
    'url',
    'email',
    'password'
  ].map((key) => {
    return hasProp(key, assert);
  });

  assert.end();
});

test('Test with new destination server config', (assert) => {

  setDSConfig(onceDS);

  let _ds = getDSConfig();
  assert.ok(bella.isObject(_ds), 'DS config must be an object, and');
  assert.ok(_ds.url === onceDS.url, `New url must be ${onceDS.url}`);
  assert.ok(_ds.email === onceDS.email, `New email must be ${onceDS.email}`);
  assert.ok(_ds.password === onceDS.password, `New password must be ${onceDS.password}`);

  setDSConfig(ds);
  assert.end();
});
