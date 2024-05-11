const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require("path");

let posts = [
  { id: 47, title: "Nairobi" },
  { id: 44, title: "Migori" },
  { id: 42, title: "Kisumu" },
  { id: 40, title: "Busia" },
  { id: 1, title: "Mombasa" },
];

app.listen(port, (req, res) => {
  console.log("running server instance");
});

app.get("/api/post", (re, res) => {
  res.json(posts);
});

app.use(express.static(path.join(__dirname, "public")));
/*
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});
*/
