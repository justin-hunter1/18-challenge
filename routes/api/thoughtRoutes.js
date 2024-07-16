const router = require("express").Router();

const { 
      getThought,
      getSingleThought,
      createThought,
      updateThought,
      deleteThought,
      updateReaction,
      deleteReaction} = require("../../controller/thoughtcontroller.js");

// GET all and POST thought
router.route("/")
      .get(getThought)
      .post(createThought);

// GET one thought, PUT and DELETE by iD
router.route("/:thoughtId")
      .get(getSingleThought)
      .put(updateThought)
      .delete(deleteThought);

// POST new reactions
router.route("/:thoughtId/reactions")
      .post(updateReaction);

// DELETE reaction by ID
router.route("/:thoughtId/reactions/:reactionId")
      .delete(deleteReaction);


module.exports = router;

