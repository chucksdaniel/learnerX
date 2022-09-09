const { RouteNotFoundError } = require('../../utils/errors');

module.exports = (req, res, next) => {
  next(new RouteNotFoundError());
};
