import dotenv from 'dotenv';
import cors from 'cors';
import { route } from './src/routes/routes.js';
import { Database } from './src/database/database.js';
import express from 'express';

const port = process.env.PORT || 3000;
const app = express();
Database();

app.use(express.json());

dotenv.config();

app.use(cors());
app.use('/application', route);

app.listen(port, () => {
  console.log(`Rodando em ${port}`);
});
