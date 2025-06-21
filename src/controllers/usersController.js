import User from "../models/User.js";
import crypto from "crypto";

export const createUser = async (req, res) => {
  console.log("Request body:", req.body);

  try {
    const useToCreate = {
      id: crypto.randomUUID(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      admin: req.body.admin,
    };
    const user = await User.create(useToCreate);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(400)
      .json({ message: "Invalid user data", error: error.message });
  }
};
