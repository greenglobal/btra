/**
 * ClientController
 **/

var debug = require('debug');
var info = debug('app:BTSimulator');

var Event = require('../utils/Event');

var start = (ctx) => {
  let body = ctx.request.body;
  info(body);

  ctx.status = 200;
  ctx.body = body;

  if (body.action && body.data) {
    Event.onSensorSignal(body.action, body.data);
  }

};

module.exports = start;

