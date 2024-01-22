//imports the methods from thought controllers
const router = require('express').Router();
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
  } = require("../../controllers/thoughtController");

  //route for all thoughts and create thought
  router.route("/").get(getThoughts).post(createThought);

    
//route for one thought, update thought, or delete thought
  router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

  //route to add reaction
  router.route("/:thoughtId/reactions").post(addReaction);
  //route to remove reaction
  router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;