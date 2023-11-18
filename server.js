import express from "express";
import{ router } from "./controller/controller.js";
import { connectDB } from "./repository/employeeRepository.js";
import "dotenv/config"
const app= express();
import cors from "cors"

connectDB();
app.use(express.json())
app.use(cors());
app.use("/api/v1/employee",router);
app.listen(5000);