var fs = require('fs');
var path = require('path');

global.Promise = require('promise-wtf');

/**
 * Import specs
 */

let where = './test/specs';
if (fs.existsSync(where)) {
  fs.readdirSync(where).forEach((file) => {
    if (path.extname(file) === '.js') {
      require(path.join('.' + where, file));
    }
  });
}
