const { AppError } = require('../../utils/errors');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const response =
    err instanceof AppError
      ? err.toJSON()
      : { code: 500, status: 'error', message: err.message };

  return res.status(statusCode).json(response);
};
