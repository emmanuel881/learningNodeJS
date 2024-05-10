//write npm run loadSer to start the server file

const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const mongoose = require("mongoose");
const { result } = require("lodash");
const Blog = require("./models/blog");

//connecting to mongodb
const dbURL =
  "mongodb+srv://netninja:netninja123KQ@nodetuts.wtdrw2d.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts";
//connect to the databasev
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    //listen to the port after we have access to the database
    app.listen(port);
  })
  .catch((err) => console.log(err));

//middleware and static file(accessible by the browser)
//the public word is the name of the folder we have allowed the broswer to access
app.use(express.static("public", { root: __dirname }));
//app.use(morgan("dev"));

//lets create a middle where to handle post
app.use(express.urlencoded({ extended: true }));

//let us register a view engine
app.set("view engine", "ejs");

/*
//returns an instance of a server
app.listen(port, (req, res) => {
  console.log("running server instance");
});
*/
//sending a response act as a return thus the code doesn't progress
app.get("/", (req, res, next) => {
  //we get the name of our directory using __dirname
  //res.sendFile("./views/index.html", { root: __dirname });
  //res.render("index");
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

//blog routes
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//handle post request

app.post("/blogs", (req, res) => {
  //lets capture the data instance
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      //lets redirect home page after submiting
      res.redirect("./blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

//lets get the ids'
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//create page
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create" });
});

//404 error
app.use((req, res) => {
  //res.status(404).sendFile("./views/error404.html", { root: __dirname });
  res.status(404).render("error404");
});
