// each User can have multimle Thoughts
// each Thought can have a single User
// array of Thought _id values in the thoughts property
// each User can have multiple Friends
// array of User _id values in the friends property (each user can refer to many other users as their friends)
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // email validation regex
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      // reference to the Thought model
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
