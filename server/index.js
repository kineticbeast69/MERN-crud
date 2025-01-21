import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import CrudRoutes from "./routes/crudRoutes.js"; //routes module
dotenv.config();
const app = express();

// middlewares zone
app.use(cors());

mongoose //database connection is over here
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(process.env.PORT, (err) => {
      //server connection is over here
      if (err) throw err;
      console.log("Server Start and Go.🛜🛜");
    });
    console.log("Database connected.");
  })
  .catch((err) => console.log(err));
app.use("/api/crud", CrudRoutes);
