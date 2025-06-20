import Projects from "../models/Projects.js";
import crypto from "crypto";

export const createProject = async (req, res) => {
  try {
    const projectCreate = {
      id: crypto.randomUUID(),
      name: req.body.name,
      description: req.body.description,
      technologies: req.body.technologies,
      image_url: req.body.image_url,
      project_url: req.body.project_url,
    };
    const project = await Projects.create(projectCreate);
    res.status(201).json(project);
  } catch {
    res.status(409).json({ message: "Error creating user" });
  }
};
