import express from "express";
import { createUser } from "../controllers/usersController.js";

const router = express.Router();

//routes de usuario

router.post("/register", createUser);

export default router;
