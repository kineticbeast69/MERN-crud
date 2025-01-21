import mongoose from "mongoose";

const crudSchema = new mongoose.Schema(
  {
    username: { required: true, type: String },
    email: { required: true, type: String, unique: true },
    password: { required: true, type: String },
  },
  { timestamps: true }
);

export const CrudModel = mongoose.model("Crud", crudSchema);
