/**
  BodyTrace checker - CLI
  utils/request
  @ndaidong
*/

/**
// use node-fetch
const fetch = require('node-fetch');
var post = (opt) => {
  let {
    url,
    data,
    auth
  } = opt;

  let query = {
    data,
    auth,
    method: 'POST',
    timeout: 0
  };
  return fetch(url, query);
};

*/

// use axios
const axios = require('axios');

var post = (opt) => {
  let {
    url,
    data,
    auth
  } = opt;

  let query = {
    url,
    data,
    auth,
    method: 'POST',
    timeout: 0
  };
  return axios(query);
};

module.exports = {
  post
};
