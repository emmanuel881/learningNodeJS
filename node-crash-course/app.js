//write npm run loadSer to start the server file

const express = require("express");
const app = express();
const port = 3000;

//let us register a view engine
app.set("view engine", "ejs");

//returns an instance of a server
app.listen(port, (req, res) => {
  console.log("running");
});

//sending a response act as a return thus the code doesn't progress
app.get("/", (req, res, next) => {
  //we get the name of our directory using __dirname
  //res.sendFile("./views/index.html", { root: __dirname });
  res.render("index");
});

app.get("/about", (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});

//create page
app.get("/blogs/create", (req, res) => {
  res.render("create");
});

//404 error
app.use((req, res) => {
  //res.status(404).sendFile("./views/error404.html", { root: __dirname });
  res.status(404).render("error404");
});
