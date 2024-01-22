//imports methods from userController
const router = require('express').Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
  } = require("../../controllers/userController");

  //route to get all user or create user
  router.route("/").get(getUsers).post(createUser);
  //route to get one user, update user or delete user
  router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

  //route to add friend or delete friend
  router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

    module.exports = router;