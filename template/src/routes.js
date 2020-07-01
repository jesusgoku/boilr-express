import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import * as handlers from './handlers';

const routes = Router();

routes.get('/', asyncHandler(handlers.home));

routes.use(handlers.errorHandler);

export default routes;
