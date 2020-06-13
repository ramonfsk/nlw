import express from 'express';

import PointController from './controllers/PointController';
import ItemController from './controllers/ItemController';

// index, show, create, update, delete

const routes = express.Router();
const pointController = new PointController();
const itemController = new ItemController();

routes.get('/items', itemController.index);

routes.post('/point', pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;

// Service Pattern
// Repository Pattern (Data Mapper)