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

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404).json({ msg: "file does not exist" });
  } else {
    res.status(200).json(post);
  }
});

module.exports = router;
