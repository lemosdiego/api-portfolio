import Projects from "../models/Projects.js";
import crypto from "crypto";

export const createProject = async (req, res) => {
  try {
    const {
      name,
      description,
      technologies,
      image_url,
      project_url,
      repository_url,
    } = req.body;

    if (!name || !description || !technologies) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const project = await Projects.create({
      id: crypto.randomUUID(),
      name,
      description,
      technologies,
      image_url,
      project_url,
      repository_url,
    });

    return res.status(201).json(project);
  } catch (error) {
    console.error("Error creating project:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
export const getProject = async (req, res) => {
  try {
    const projects = await Projects.findAll({
      order: [["created_at", "DESC"]],
    });
    res.status(200).json(projects);
  } catch (error) {
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
        repository_url: req.body.repository_url,
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
