/**
 * PlatformController
 * Handle the requests from IoTPlatform to BodyTrace
 **/

var start = (ctx) => {
  ctx.status = 200;
  ctx.body = `Received request from IoTPlatform`;
};

module.exports = {
  start
};
