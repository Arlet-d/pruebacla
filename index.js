import express from "express";
import userRoutes from "./user/routes/user.route.js"; 
import { AppDataSource } from "./config/db.config.js";

const app = express();
const port = process.env.DBPORT || 3000; 

app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Hola 6to");
});

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log("servidor corriendo");
});

AppDataSource.initialize()