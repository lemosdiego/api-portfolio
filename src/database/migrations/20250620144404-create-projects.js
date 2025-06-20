"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("projects", {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
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
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("projects");
}
