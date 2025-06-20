import express from "express";
import Projects from "./models/Projects.js";
import { Sequelize } from "sequelize";
import config from "./config/database.js";
import projectRoutes from "./routes/route.js";

const app = express();
app.use(express.json());

const sequelize = new Sequelize(config);
Projects.init(sequelize);

app.use("/projects", projectRoutes);

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
