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
  header(' Summary:');
  console.log(t.toString());
};

var renderDetail = (data) => {
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
  header(' View in detail, sort by duration, from slowest to fastest:');
  console.log(t.toString());
};

var render = (summary, results = []) => {
  line(':'.repeat(150));
  renderDetail(results);
  line(':'.repeat(150));
  renderSummary(summary);
};

module.exports = {
  render
};
