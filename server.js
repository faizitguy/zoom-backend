const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const server = require("http").Server(app);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("room");
});

server.listen(5000, () => {
  console.log("Server is up and running");
});
