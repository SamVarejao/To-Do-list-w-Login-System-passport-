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

const User = mongoose.model("User", UserSchema);
module.exports = User;
