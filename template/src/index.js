import { createServer } from 'http';

import app from './app';
import logger from './logger';
import { PORT } from './config';

const server = createServer(app);

server.listen(PORT, () => {
  logger.info(`Listen on: http://0.0.0.0:${PORT}`);
});
