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

CrudRoutes.get("/read", readData);
CrudRoutes.post("/add", AddValidator, addData);
CrudRoutes.put("/update/:userID", UpdateValidate, updateData);
CrudRoutes.delete("/delete/:userID", deleteData);
CrudRoutes.get("/singleUser/:userId", oneTimeData);

export default CrudRoutes;
