const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
    
  },
  timeLimit: {
    type: Date
  },
  author:{
    type: mongoose.ObjectId
  }
  
});

const Post = mongoose.model("Post", ItemSchema);
module.exports = Post;
