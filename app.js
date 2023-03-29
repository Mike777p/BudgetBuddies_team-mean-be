const express = require("express");

const getUsers = require('./Controllers/UserControllers.js');

const app = express();

app.use(express.json());

app.get("/users", getUsers);

module.exports = app;
