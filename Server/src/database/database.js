import mongoose from "mongoose";

const url = "";

const Database = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Running Database");
    })
    .catch((err) => {
      return console.log(`Connection error with database: ${err}`);
    });
};

export default Database;
