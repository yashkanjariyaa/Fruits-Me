const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 1337;

const { signIn, signUp, check } = require("../controller/auth.js");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, application/json");
  next();
});

app.post("/api/login", signIn);

app.post("/api/register", signUp);

app.post("/api/check", check);

app.listen(port, () => {
  console.log("App is listening on " + port);
});
