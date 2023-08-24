// username property that holds the username of the user who created this thought
// each Thought can have multiple Reactions (replies) - one to many relationship
// each Reaction associated with a single Thought
// array of Reactions (replies) in the reactions property
const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      // define the reaction schema
    },
  ],
});

// getter method to format the createdAt timestamp
thoughtSchema.virtual("formattedCreatedAt").get(function () {
  return new Date(this.createdAt).toLocaleString();
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
