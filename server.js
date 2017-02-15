/**
 * Starting app
 * @ndaidong
 **/

const fs = require('fs');
const path = require('path');

const bella = require('bellajs');

var config = require('./configs');

config.revision = bella.id;

const debug = require('debug');
const info = debug('app:info');
const error = debug('app:error');

const Koa = require('koa');
const cors = require('kcors');
const router = require('koa-router')();
const favicon = require('koa-favicon');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.context.config = config;

app.use(cors());
app.use(favicon('./favicon.ico'));
app.use(bodyParser({
  encode: 'utf-8',
  formLimit: '128kb',
  jsonLimit: '1mb',
  onerror: (err, ctx) => {
    ctx.throw('body parse error', 422);
    error(err);
  }
}));

fs.readdirSync('./app/routers').forEach((file) => {
  if (path.extname(file) === '.js') {
    require('./app/routers/' + file)(router);
  }
});

app.use(router.routes()).use(router.allowedMethods({throw: true}));

app.on('error', (err, ctx) => {
  error('server error', err, ctx);
});

var onServerReady = () => {
  info(`Server started at the port ${config.port} in ${config.ENV} mode`);
  info('Access website via', `http://127.0.0.1:${config.port}`);
  info('Public URL:', config.url || 'None');
};

app.listen(config.port, onServerReady);

module.exports = app;
