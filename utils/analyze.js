/**
  BodyTrace checker - CLI
  utils/analyze
  @ndaidong
*/

var bella = require('bellajs');
var prettyMs = require('pretty-ms');

var Queue = [];
var Result = [];
var Fails = [];

const MAX_REQUEST_COUNT = 10000;

const {
  time
} = bella;

const {
  info,
  error,
  success
} = require('./log');

const {
  getDSConfig
} = require('./store');

const {
  getRamdomMessage,
  getRandomIMEI
} = require('./message');

const {
  request
} = require('./request');

const {
  render
} = require('./render');

var analyze = () => {

  let total = Result.length;

  let passed = Result.filter((item) => {
    return item.status === 1;
  });
  let failed = Result.filter((item) => {
    return item.status === 0;
  });

  Result.map((item) => {
    let {
      start,
      end
    } = item;
    let delta = end - start;
    item.delta = delta;
    item.duration = prettyMs(delta);
    return item;
  });

  Result.sort((a, b) => {
    return a.delta < b.delta ? 1 : 0;
  });

  let arr = bella.stabilize(Result).msort('delta', -1);

  let fastest = arr.first();
  let slowest = arr.last();
  let average = prettyMs((fastest.delta + slowest.delta) / 2);

  let summary = {
    total,
    passed: passed.length,
    failed: failed.length,
    fastest: fastest.duration,
    slowest: slowest.duration,
    average
  };

  return render(summary, arr);
};

var execute = () => {
  let task = Queue.shift();
  task().then((r) => {
    Result.push(r);
  }).catch((err) => {
    Fails.push(err);
  }).finally(() => {
    if (Queue.length > 0) {
      setTimeout(execute, 0);
    } else {
      setTimeout(analyze, 100);
    }
  });
};

var sendRequest = (count = 1) => {
  if (isNaN(count) || count < 1 || count > MAX_REQUEST_COUNT) {
    info('--count must be a number, in the range of [1, 1000]');
    count = 1;
  }

  let p = getDSConfig();
  let fn = () => {
    let m = getRamdomMessage();
    let imei = getRandomIMEI();
    let start = time();
    info(`${imei}: started sending a request at ${start}`);

    let url = `https://us.data.bodytrace.com/1/device/${imei}/incomingmessage`;

    return request(imei, m, p).then((res) => {
      let end = time();
      success(`${imei}: received complete response at ${end}`);
      let {
        config: conf
      } = res;
      let {
        data
      } = conf;
      return {
        status: 1,
        start,
        end,
        imei,
        url,
        data
      };
    }).catch((err) => {
      let end = time();
      error(`${imei}: error occurred while sending request!`);
      let {
        response = {}
      } = err;
      let {
        data = ''
      } = response;
      error(`${imei}: response message: ${data}`);
      return {
        status: 0,
        start,
        end,
        imei,
        url
      };
    });
  };

  let arr = [];
  while (arr.length < count) {
    arr.push(fn);
  }

  let n = arr.length;
  info(`Prepare to send ${n} request${n > 1 ? 's' : ''}...`);

  Queue = arr;
  return execute();
};

module.exports = {
  sendRequest,
  getRamdomMessage
};
