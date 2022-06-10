import SwaggerUI from "swagger-ui";
import express from 'express'

import validarCPF from '../middlewares/middleware.js';
import { allAppController, createAppController, updateAppController, deleteAppController } from '../controllers/app-controller.js';

export const route = express.Router();

route.use('/api', SwaggerUI.serve);

route.get('/apps', allAppController);
route.post('/', validarCPF, createAppController);
route.put('/update/:id', validarCPF, updateAppController);
route.delete('/delete/:id', validarCPF, deleteAppController)
