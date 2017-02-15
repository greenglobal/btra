/**
 * Sensor router
**/

const platformController = require('../controllers/platform');

module.exports = (router) => {
  router.post('/1/device/:imei/incomingmessage', platformController.start);
};
