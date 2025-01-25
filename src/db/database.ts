import SQ from "sequelize";
import { env } from "../utils/envConfig.js";

const { host, user, database, password } = env.db;

export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: "mysql",
});
