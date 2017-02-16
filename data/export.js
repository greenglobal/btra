var MongoClient = require('mongodb').MongoClient;
var mongoURL = 'mongodb://localhost:27017/iot';

var connect = () => {
  return new Promise((resolve, reject) => {
    info('Start connecting to MongoDB at:');
    info(mongoURL);
    MongoClient.connect(mongoURL, (err, db) => {
      if (err) {
        console.error('Error while connecting to MongoDB server');
        return reject(err);
      }
      return resolve(db);
    });
  });
};

let extractAndSave = (arr) => {
  fs.writeFileSync('./data/imei.json', JSON.stringify(arr), 'utf8');
};

connect().then((db) => {
  info('Get collection "Unit"');
  let col = db.collection('Unit');
  col
    .find()
    .toArray((err, docs) => {
      db.close();
      if (err) {
        return console.error(err);
      }
      return extractAndSave(docs.map((item) => {
        return item.imei;
      }));
    });
});
