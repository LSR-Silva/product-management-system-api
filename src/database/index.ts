import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.DB_POR),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["src/entities/**/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
  synchronize: true,
  logging: false
});

dataSource.initialize()
.then()
.catch((error) => console.log("Error connecting to the database:", error));
