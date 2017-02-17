/**
 * Testing
 * @ndaidong
 */

var test = require('tape');
var bella = require('bellajs');

var {
  getRamdomMessage,
  getRandomMsgType
} = require('../../utils');

test('Check utils/message --> getRamdomMessage()', (assert) => {
  let msg = getRamdomMessage();
  assert.ok(bella.isObject(msg), 'Message must be an object');
  assert.ok(bella.hasProperty(msg, 'data'), 'Message must have "data"');
  assert.end();
});

test('Check utils/message --> getRandomMsgType()', (assert) => {
  let type = getRandomMsgType();
  assert.ok(bella.isString(type), 'MessageType must be a string');
  assert.ok(type.length > 3, 'MessageType must be longer than 3 characters');
  assert.end();
});
