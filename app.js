var request = require('request');
// var sleep = require('sleep');
var winston = require('winston');
var moment = require('moment');

// var SLEEP_TIME = 60;
var TASK_PERIOD = 3600 * 1000 * 1.5;
// var TASK_PERIOD = 3600;

var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'log/info.log' })
    ]
  });

// var logInfo = function (info) {
//   var time = moment().format();
//   logger.info(time + '# ' + info);
// }
logger.info('Task Start');

var timer = setInterval(function () {
    // logInfo('Tick');
    logger.info('Make Request');
    request({
      method: 'POST',
      url: 'http://121.199.52.161:18083/weixin/auth/jsparam',
    // url: 'http://localhost:3000/aaa',
      form: {url:'https://weixin.idongjia.cn/h5-item/334249'},
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        // 'Flag-Test': 'nodejs'
      }
    }, function (error, response, body) {
        if (error) {
          logger.info('error:' + error); // Print the error if one occurred
        }
        logger.info('statusCode:' + (response && response.statusCode)); // Print the response status code if a response was received
        logger.info('body:' + body); // Print the HTML for the Google homepage.
    });
}, TASK_PERIOD);

// sleep.sleep(SLEEP_TIME);
