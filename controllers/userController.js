// **`/api/users`**
// ObjectId() method for converting userId string into an ObjectId for querying database
const { ObjectId } = require("mongoose").Types;
const { default: mongoose } = require("mongoose");
const { Users, Thoughts } = require("../models");
// * `GET` all users
const userCount = async () => {
  try {
    const userData = await Users.aggregate([
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
        },
      },
    ]);
    if (numberofUsers.length > 0) {
      return numberofThoughts[0].count;
    } else {
      return 0;
    }
  } catch (err) {
    console.error("Error while aggregating thought data:", error);
    throw error;
  }
};
// * `GET` a single user by its `_id` and populated thought and friend data

// * `POST` a new user:

// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// * `PUT` to update a user by its `_id`

// * `DELETE` to remove user by its `_id`
// **BONUS**: Remove a user's associated thoughts when deleted.

// **`/api/users/:userId/friends/:friendId`**

// * `POST` to add a new friend to a user's friend list

// * `DELETE` to remove a friend from a user's friend list
