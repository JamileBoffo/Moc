import mongoose from 'mongoose';
import 'dotenv/config'

const local = 'mongodb://localhost:27017/mocx-db';

export const Database = () => {
  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Running Database');
    })
    .catch((err) => {
      return console.log(`Connection error with database: ${err}`);
    });
};
