const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const posts = require("./routes/postRoutes");
const logger = require("./middleware/logger");

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware
app.use(logger);

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
