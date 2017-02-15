/**
 * HomeController
 **/

var fs = require('fs');
var bella = require('bellajs');
var config = require('../../configs');

var start = (ctx) => {
  ctx.status = 200;

  let tpl = fs.readFileSync('./app/views/home.htm', 'utf8');
  let data = {
    title: config.description,
    pusher: config.pusher
  };
  let html = bella.template(tpl).compile(data);
  ctx.body = html;
};

module.exports = start;
