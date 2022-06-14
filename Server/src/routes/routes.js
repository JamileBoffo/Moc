import express from 'express';
import { validCPF, validId } from '../middlewares/middleware.js';
import {
  allAppController,
  createAppController,
  updateAppController,
  deleteAppController,
} from '../controllers/app-controller.js';

export const route = express.Router();

route.get('/apps', allAppController);
route.post('/registration', validCPF, createAppController);
route.put('/update/:id', validId, updateAppController);
route.delete('/delete/:id', validId, deleteAppController);
