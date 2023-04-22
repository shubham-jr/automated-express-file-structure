const mongoose = require('mongoose');
const httpStatus = require('http-status');

const ApiError = require('../utils/ApiError');
const config = require('../utils/config');
const logger = require('../utils/logger');

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
    const message =
      error.message || err.code == 11000 ? err : httpStatus[statusCode];

    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (config.env === 'production') {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message;
  }
  const response = {
    code: statusCode,
    sucess: false,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  res.locals.errorMessage = err.message;

  if (config.env === 'development') {
    logger.error(err);
  }

  res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};
