const fs = require('fs');
const logger = require('./logger');

module.exports.deleteFile = (fileName) => {
  if (fileName) {
    fs.unlink(`files/${fileName}`, (err) => {
      if (err) logger.error(err);
    });

    logger.info(`${fileName} deleted`);
  }
};
