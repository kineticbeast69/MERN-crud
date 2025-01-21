import { CrudModel } from "../model/CrudModel.js";
import bcrypt from "bcryptjs";
const readData = async (req, res) => {
  try {
    const getAllData = await CrudModel.find(); //getting all the user data
    if (getAllData.length == 0)
      return res.status(404).json({ message: "No user found." });
    return res.status(201).json({ getAllData });
  } catch (error) {
    if (error)
      return res.status(401).json({ message: "Technical error", error });
  }
};
const addData = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // checking the user is exists or not
    const userExists = await CrudModel.findOne({
      email: email,
      username: username,
    });
    if (userExists)
      return res.status(409).json({ message: "User already Exists." });
    // saving the user in database
    const salt = await bcrypt.genSalt(10); //salting the password
    const hashPassword = await bcrypt.hash(password, salt); //hashing the password

    const addUser = new CrudModel({
      //adding the user
      username,
      email,
      password: hashPassword,
    });
    await addUser.save(); //saving the user
    return res.status(200).json({ message: "User added Sucessfully" });
  } catch (error) {
    if (error)
      return res.status(500).json({ message: "Technical error", error });
  }
};
const updateData = async (req, res) => {
  const { userID } = req.params;
  const { username, email } = req.body;
  try {
    const updateUser = await CrudModel.findByIdAndUpdate(userID, {
      username,
      email,
    });
    if (!updateUser)
      return res.status(401).json({ message: "Can't updated the user." });
    return res
      .status(201)
      .json({ message: "User updated Sucessfully.", success: true });
  } catch (error) {
    return res.status(500).json({ message: "Technical Error.", error });
  }
};
const deleteData = async (req, res) => {
  const { userID } = req.params;
  try {
    const deleteUser = await CrudModel.findByIdAndDelete(userID);
    return res.status(201).json({ message: "User deleted successfully." });
  } catch (error) {
    return res.status(500).json("technical error.");
  }
};
const oneTimeData = async (req, res) => {
  const { userID } = req.params;
  //   fetching the single user data
  try {
    const user = await CrudModel.findById(userID, "username email"); //getting username and email only
    if (!user) return res.status(404).json({ message: "No user Exist." }); //checking the exists in records or not
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Technical error.", error });
  }
};

export { readData, addData, updateData, deleteData, oneTimeData };
