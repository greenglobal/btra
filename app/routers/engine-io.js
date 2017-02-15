/**
 * Engine-io.js router
**/

var fs = require('fs');

module.exports = (router) => {

  router.get('/engine-io.js', (ctx) => {
    ctx.status = 200;
    ctx.response.set('content-type', 'text/javascript');
    ctx.body = fs.readFileSync('./data/engine-io.js', 'utf8');
  });
};
