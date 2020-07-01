import { createLogger, format, transports } from 'winston';

import { DEBUG_LEVEL, NODE_ENV } from './config';

const logger = createLogger({
  level: DEBUG_LEVEL || (NODE_ENV === 'production' ? 'warning' : 'debug'),
  format: format.combine(format.timestamp(), format.prettyPrint()),
  transports: [new transports.Console()],
});

export default logger;
