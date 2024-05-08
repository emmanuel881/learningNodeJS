const express = require("express");
const app = express();
const port = 3000;

//returns an instance of a server
app.listen(port, (req, res) => {
  console.log("running");
});

app.get("/", (req, res) => {
  res.send("hello world");
});
