import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import { celebrate, Joi } from 'celebrate';

import PointController from './controllers/PointController';
import ItemController from './controllers/ItemController';

// index, show, create, update, delete

const routes = express.Router();
const upload = multer(multerConfig);

const pointController = new PointController();
const itemController = new ItemController();

routes.get('/items', itemController.index);

routes.post(
  '/point', 
  upload.array('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      item: Joi.string().required()
    })
  }, {
    abortEarly: false
  }),
  pointController.create
);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;

// Service Pattern
// Repository Pattern (Data Mapper)