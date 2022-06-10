import dotenv from 'dotenv';
import cors from 'cors';
import { router } from './src/routes/routes.js';
import { Database } from './src/database/database.js'
import express, { application } from 'express';

const port = process.env.PORT || 3333;


app.use(express.json());
dotenv.config();

app.use(cors());
app.use('/', router)

app.listen(port, () => {
    console.log(`Rodando em ${port}`)
})
