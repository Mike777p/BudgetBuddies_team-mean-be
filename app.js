import express from "express";
import getUsers from "./Controllers/UserControllers.js"

const app = express();

const cors = require("cors");

app.use(express.json(), cors());

app.get("/users", getUsers);

export default app;