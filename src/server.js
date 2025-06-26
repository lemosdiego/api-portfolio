import express from "express";
import Projects from "./models/Projects.js";
import { Sequelize } from "sequelize";
import config from "./config/database.js";
import projectRoutes from "./routes/projectRoute.js";
import userRoutes from "./routes/userRoute.js";
import User from "./models/User.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

const sequelize = new Sequelize(config);
Projects.init(sequelize);
User.init(sequelize);

app.use("/projects", projectRoutes);
app.use("/users", userRoutes);

//configuração do servidor
const PORT = process.env.PORT || 3001;

sequelize
  .authenticate()
  .then(() => {
    console.log("server rodando");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco:", err);
  });
