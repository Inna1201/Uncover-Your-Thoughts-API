const router = require("express").Router();

const {
  getAllThoughts,
  getSingleThought,
  newThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// -- /api/thoughts
router.route("/").get(getAllThoughts)
.post(newThought);

// -- /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// -- /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// -- /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
