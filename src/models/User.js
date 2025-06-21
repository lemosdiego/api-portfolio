import { Model, Sequelize } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
      },
      { sequelize }
    );
  }
}

export default User;
