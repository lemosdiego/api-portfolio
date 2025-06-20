import express from "express";
import { createProject } from "../controllers/projectsController.js";

const router = express.Router();

router.post("/register", createProject);

export default router;
