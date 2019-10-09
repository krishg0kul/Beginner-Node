var http = require("http");
const port = "1112";
const aalink = require("./sam.txt");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(aalink);
    res.end();
  })
  .listen(port);
