const http = require("http");
const fs = require("fs");
const url = require("url")

const myServer = http.createServer((req, res) => {
  if(req.url === "favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.url} : New req Recei\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`)
        break;
      case "/contact":
        res.end("shekharjadhav501@gmail.com");
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are you results for" + search);
        break;

        default:
          res.end("404 Not Found")
    }
  });
});

// console.log(req.headers)
// console.log(req)

myServer.listen(8000, () => console.log("Server Started!"));
