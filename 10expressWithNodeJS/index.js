const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello Form Home Page");
});

app.get("/about", (req, res) => {
  return res.send("Hello From Home Page");
});

const myServer = http.createServer((req, res) => {
  if (req.url === "favicon.ico") return res.end();
  const log = `${Date.now()}:${req.method} : ${req.url} : New req Recei\n`;
  const myUrl = url.parse(req.url, true);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;
      case "/contact":
        res.end("shekharjadhav501@gmail.com");
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are you results for" + search);
        break;
      case "/signup":
        if (req.method === "GET") res.end("this is a signup form");
        else if (req.method === "POST");
        res.end("Success");

      default:
        res.end("404 Not Found");
    }
  });
});

// console.log(req.headers)
// console.log(req)

myServer.listen(8000, () => console.log("Server Started!"));
