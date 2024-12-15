const User = require("../models/user")

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

module.exports ={
    handleGetAllUsers,
}