const { verifyUser } = require('../../services/user');
const { UnauthorizedError, ForbiddenError } = require('../../utils/errors');
const { verifyToken } = require('../../utils/token');

const protect = async (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer')
    )
      throw new Error();

    const token = req.headers.authorization.replace('Bearer', '').trim();
    if (!token) throw new Error();

    const decodedUser = await verifyToken(token);
    const user = await verifyUser(decodedUser.email);

    req.user = user;
    next();
  } catch (error) {
    next(new UnauthorizedError());
  }
};

const restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) return next(new ForbiddenError());

    return next();
  };

module.exports = {
  protect,
  restrictTo
};
