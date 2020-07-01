import logger from './logger';

async function home(req, res) {
  res.json({ message: 'Hello World' });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  logger.error(err);

  res.status(500).json({ message: err.message });
}

export { home, errorHandler };
