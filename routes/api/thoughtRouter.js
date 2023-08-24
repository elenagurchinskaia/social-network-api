const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtbyId,
  deleteThoughtbyId,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// /api/thoughts

router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThoughtbyId)
  .delete(deleteThoughtbyId);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
