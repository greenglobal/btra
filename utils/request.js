/**
  BodyTrace checker - CLI
  utils/request
  @ndaidong
*/

const fetcher = require('./fetcher');

var request = (imei, data, ds) => {
  let url = ds.url.replace(':imei', imei);
  let {
    email: username,
    password
  } = ds;

  let query = {
    url,
    data,
    auth: {
      username,
      password
    }
  };
  return fetcher.post(query);
};

module.exports = {
  request
};
