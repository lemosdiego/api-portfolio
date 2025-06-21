import express from "express";
import Projects from "./models/Projects.js";
import { Sequelize } from "sequelize";
import config from "./config/database.js";
import projectRoutes from "./routes/projectRoute.js";
import userRoutes from "./routes/userRoute.js";
import User from "./models/User.js";

const app = express();
app.use(express.json());

const sequelize = new Sequelize(config);
Projects.init(sequelize);
User.init(sequelize);

app.use("/projects", projectRoutes);
app.use("/users", userRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("server rodando");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Erro");
  });
