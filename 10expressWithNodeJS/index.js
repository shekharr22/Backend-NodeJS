// const http = require("http");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Form Home Page");
});

app.get("/about", (req, res) => {
  //return res.send("Hello From About Page" + "hey" + req.query.name + "you are" + req.query.age);
  return res.send(`Hello ${req.query.name}`);
});

app.listen(8000, () => console.log("Server Started!"));


// const myServer = http.createServer(app);

// myServer.listen(8000, () => console.log("Server Started!"));
