const express = require("express");
const router = express.Router();

let posts = [
  { id: 47, title: "Nairobi" },
  { id: 44, title: "Migori" },
  { id: 42, title: "Kisumu" },
  { id: 40, title: "Busia" },
  { id: 1, title: "Mombasa" },
];

router.get("/", (re, res) => {
  res.json(posts);
});

router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error("post does not exist");
    return next(error);
  } else {
    res.status(200).json(post);
  }
});

//craete a new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    return res.status(400).json({ msg: `Please include title` });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

//update post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(400).json({ msg: "invalid id" });
  }
  post.title = req.body.title;
  res.status(200).json(posts);
});

module.exports = router;
