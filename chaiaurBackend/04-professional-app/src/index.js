// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
dotenv.config({ path: "./env" });

import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR can't connect with express ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERR can't connect with express ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw err;
  }
})();

*/
