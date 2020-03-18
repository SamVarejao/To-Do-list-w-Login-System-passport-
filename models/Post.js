const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  authorName: {
    type: User,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  timeLimit: {
    type: Date
  },
  content: {
    type: String,
    required: true
  }
});

const Post = mongoose.model("Post", ItemSchema);
module.exports = Post;
