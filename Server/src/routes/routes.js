import express from 'express'
import {TestaCPF} from '../middlewares/middleware.js';
import { allAppController, createAppController, updateAppController, deleteAppController } from '../controllers/app-controller.js';


export const route = express.Router();


route.get('/apps', allAppController);
route.post('/registration', TestaCPF, createAppController);
route.put('/update/:id', updateAppController);
route.delete('/delete/:id', deleteAppController)
