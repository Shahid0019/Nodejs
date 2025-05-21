const User = require("../modals/user");

async function handlerGetAllUsers(req, res) {
  const allDbUsers = await User.find();
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  const getUserById = await User.findById(req.params.id);
  return res.json(getUserById);
}
async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.json({ status: "success" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

async function handleCreateNewUser(req, res) {
  const newUser = await User.create(req.body);
  return res.json("new user created", newUser);
}

module.exports = {
  handlerGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
