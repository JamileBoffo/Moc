import mongoose from 'mongoose';
const remote =
  'mongodb+srv://JBoffo:240819@mocx.pc68srq.mongodb.net/?retryWrites=true&w=majority';
const local = 'mongodb://localhost:27017/mocx-db';

export const Database = () => {
  mongoose
    .connect(local, {
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
