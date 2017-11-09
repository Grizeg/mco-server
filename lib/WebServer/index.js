const http = require("./http.js");
const logger = require("../../src/logger.js");

function start(callback) {
  /* Start the NPS servers */
  http.start(err => {
    if (err) {
      throw err;
    }
    logger.info("HTTP Servers started");
    callback(null);
  });
}

module.exports = { start };