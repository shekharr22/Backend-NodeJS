const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");
const path = require("path");
const { type } = require("os");

const app = express();
const PORT = 8000;

//Connection

mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));

//Schema

const userSchema = new mongoose.Schema({
  fistName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  jobTitle: {
    type: String
  },
  gender: {
    type: String
  }
});

//Model
const User = mongoose.model("user", userSchema);

//Middlewares - plugin
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    <ul>
    `;
  res.send(html);
});

//REST Api

app.get("/api/users", (req, res) => {
  console.log(req.headers);
  return res.json(users);
});

app.route("/api/users/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  // 500 server error
  // const user = users.find(user => user[0].id === id);

  //If user not found - 404
  if (!user) return req.status(404).json({ error: "User Not found" });
  return res.json(user);
});

app.post("/api/users", async (req, res) => {
  // TODO : Create new user

  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "ALl fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title
  });

  console.log("result", result);
  return res.status(201).json({ msg: "success" });
});

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
