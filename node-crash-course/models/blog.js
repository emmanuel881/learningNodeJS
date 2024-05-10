const mongoose = require("mongoose");
//to define the structure of doc in the collection
const Schema = mongoose.Schema;

//lets create a schema
const blogSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    snippet: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

//lets create a model, its advised to use capital letters
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
