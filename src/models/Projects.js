import { Model, Sequelize } from "sequelize";

class Projects extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        technologies: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
        image_url: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        project_url: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      { sequelize }
    );
  }
}

export default Projects;
