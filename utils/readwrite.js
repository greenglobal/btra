/**
  BodyTrace checker - CLI
  utils/readwrite
  @ndaidong
*/


var fs = require('fs');

var read = (file) => {
  let s = fs.readFileSync(file, 'utf8');
  return JSON.parse(s);
};

var write = (file, content = {}) => {
  return fs.writeFileSync(file, JSON.stringify(content), 'utf8');
};

module.exports = {
  read,
  write
};
