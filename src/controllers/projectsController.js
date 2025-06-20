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
export const getProject = async (req, res) => {
  try {
    const projects = await Projects.findAll();
    res.status(200).json(projects);
  } catch {
    res
      .status(500)
      .json({ message: "Error getting projects", error: error.message });
  }
};
export const deletProject = async (req, res) => {
  try {
    const project = await Projects.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(project);
  } catch {
    res.status(409).json({ message: "Error deleting user" });
  }
};
export const editProject = async (req, res) => {
  try {
    const [updated] = await Projects.update(
      {
        name: req.body.name,
        description: req.body.description,
        technologies: req.body.technologies,
        image_url: req.body.image_url,
        project_url: req.body.project_url,
      },
      {
        where: { id: req.params.id },
      }
    );

    const project = await Projects.findByPk(req.params.id);

    res
      .status(updated ? 200 : 404)
      .json(updated ? project : { message: "Project not found" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error editing project", error: error.message });
  }
};
