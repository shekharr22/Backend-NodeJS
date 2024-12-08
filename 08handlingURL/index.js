const http = require("http");
const fs = require("fs");
const url = require("url")

const myServer = http.createServer((req, res) => {
  if(req.url === "favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} : New req Recei\n`;
  const myUrl = url.parse(req.url);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("Hey iam shekhar");
        break;
      case "/contact":
        res.end("shekharjadhav501@gmail.com");
        break;
    }
  });
});

// console.log(req.headers)
// console.log(req)

myServer.listen(8000, () => console.log("Server Started!"));
