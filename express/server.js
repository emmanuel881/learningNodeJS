const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const posts = require("./routes/postRoutes");

app.listen(port, (req, res) => {
  console.log("running server instance");
});

//post routes
app.use("/api/post", posts);

app.use(express.static(path.join(__dirname, "public")));
/*
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});
*/
