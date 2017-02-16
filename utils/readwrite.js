/**
  BodyTrace checker - CLI
  utils/readwrite
  @ndaidong
*/


var fs = require('fs');

var read = (file) => {
  if (fs.existsSync(file)) {
    let s = fs.readFileSync(file, 'utf8');
    return JSON.parse(s);
  }
  return null;
};

var write = (file, content = {}) => {
  try {
    fs.writeFileSync(file, JSON.stringify(content), 'utf8');
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports = {
  read,
  write
};
