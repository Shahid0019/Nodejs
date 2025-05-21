const express = require("express");
const router = express.Router();
const {
  handleGetUserById,
  handlerGetAllUsers,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");
//Api Call by all
router.route("/")
  .get(handlerGetAllUsers)
  .post(handleCreateNewUser);
// Api Call by id
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

// For Understanding purposes only, not to be used in production

// app.patch("/api/users/:id", (req, res) => {
//   //TODO:Edit the user with id
//   return res.json({status:"pending"})
// })
// app.delete("/api/users/:id", (req, res) => {
//   //TODO:Delete the user with id
//   return res.json({status:"pending"})
// })

module.exports = router;
