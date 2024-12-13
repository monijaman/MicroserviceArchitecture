import { Sequelize } from "sequelize";
import { config } from "../config";

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    port: Number(config.DB_PORT),
    dialect: "mysql",
  }
);

export default sequelize;
