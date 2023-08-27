const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {
  logger.error('An error occurred:', err);
  res.status(500).json({ error: 'Internal server error' });
};
