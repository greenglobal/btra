/**
  BodyTrace checker - CLI
  utils/log
  @ndaidong
*/

var bella = require('bellajs');
var Table = require('cli-table2');

const {
  header,
  line
} = require('./log');

var date = (t) => {
  return bella.date(t).format('h:i:s');
};

var renderSummary = (data) => {
  let t = new Table();
  t.push({'Total requests sent': data.total});
  t.push({Success: data.passed});
  t.push({Failed: data.failed});
  t.push({Fastest: data.fastest});
  t.push({Slowest: data.slowest});
  t.push({Average: data.average});
  console.log(t.toString());
};

var buildTable = (data) => {
  let t = new Table({
    head: ['IMEI', 'Status', 'Begin', 'End', 'Duration', 'Full URL']
  });
  data.forEach((row) => {
    let {
      imei,
      status,
      start,
      end,
      duration,
      url = ''
    } = row;
    t.push([imei, status === 1 ? 'Passed' : 'Failed', date(start), date(end), duration, url]);
  });
  console.log(t.toString());
};

var renderDetail = (data) => {
  return buildTable(data);
};

var renderTop5Slowest = (arr) => {
  let data = arr.slice(-5);
  return buildTable(data);
};

var renderTop5Fastest = (arr) => {
  let data = arr.slice(0, 5);
  return buildTable(data);
};

var render = (summary, results = []) => {
  line(':'.repeat(150));
  header(' View in detail, sort by duration, from slowest to fastest:');
  renderDetail(results);

  if (results.length > 10) {
    line(':'.repeat(150));
    header(' Top 5 fastest requests:');
    renderTop5Fastest(results);
    line(':'.repeat(150));
    header(' Top 5 slowest requests:');
    renderTop5Slowest(results);
  }

  line(':'.repeat(150));
  header(' Summary:');
  renderSummary(summary);

  line(':'.repeat(150));
};

module.exports = {
  render
};
