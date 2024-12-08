const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} : New req Recei\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
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
