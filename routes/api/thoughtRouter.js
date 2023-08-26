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

// /api/thought

router.route("/").get(getAllThoughts).post(createThought);

// /api/thought/:thoughtId
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThoughtbyId)
  .delete(deleteThoughtbyId);

// /api/thought/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thought/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
module.exports = router;
