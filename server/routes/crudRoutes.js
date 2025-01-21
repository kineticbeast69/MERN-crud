import express from "express";
import {
  readData,
  addData,
  deleteData,
  updateData,
  oneTimeData,
} from "../controller/CrudController.js";
import { AddValidator } from "../middlewares/AddMiddleware.js";
import { UpdateValidate } from "../middlewares/UpdateMiddleware.js";
const CrudRoutes = express.Router();

CrudRoutes.get("/read", readData); //getting all data
CrudRoutes.post("/add", AddValidator, addData); //adding the data
CrudRoutes.put("/update/:userID", UpdateValidate, updateData); //updating the data
CrudRoutes.delete("/delete/:userID", deleteData); //deleting data
CrudRoutes.get("/singleUser/:userID", oneTimeData); //fetching the single users data

export default CrudRoutes;
