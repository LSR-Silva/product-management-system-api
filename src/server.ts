import "reflect-metadata";
import app from "./app";
import "./database";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3005;

app.listen(PORT);
