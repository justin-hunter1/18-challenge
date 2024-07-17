const router = require("express").Router();

const { getUsers,
      getSingleUser,
      createUser,
      updateUser,
      deleteUser,
      createFriend,
      deleteFriend } = require("../../controller/usercontroller");

router.route("/")
      .get(getUsers)
      .post(createUser);

router.route("/:userId")
      .get(getSingleUser)
      .put(updateUser)
      .delete(deleteUser);

router.route("/:userId/friends/:firendId")
      .post(createFriend)
      .delete(deleteFriend);

module.exports = router;
