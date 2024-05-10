const Blog = require("../models/blog");

//get all blogs and inject to index view
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

//get a single blog
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result });
    })
    .catch((err) => {
      res.render("error404");
    });
};

//send the form
const blog_create_get = (req, res) => {
  res.render("create", { title: "create" });
};

//add a new post
const blog_create_post = (req, res) => {
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
};

//delete a post
const blog_delete = (req, res) => {
  const id = req.params.id;

  blogController
    .findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .then((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_index,
  blog_details,
  blog_delete,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
