const constants = require('../utils/constants');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || token !== `Bearer ${constants.TOKEN}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};
