import express from "express";
import {
  createProject,
  deletProject,
  editProject,
  getProject,
} from "../controllers/projectsController.js";

const router = express.Router();

router.post("/register", createProject);
router.get("/get", getProject);
router.delete("/delete/:id", deletProject);
router.put("/edit/:id", editProject);

export default router;
