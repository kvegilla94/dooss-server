const userService = require("../services/user");
const { User, Booking } = require("../../db/models");

const getUserById = async (req, res) => {
  const { success, result } = await userService.getUserById(req.params.id);
  res.status(success ? 200 : 404).json({
    success,
    data: result,
  });
};

module.exports = {
  getUserById,
};
