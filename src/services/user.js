const { User } = require("../../db/models");
const checkIfExist = async ({ email, lastName, firstName }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return await create({ lastName, firstName, email });
  }
  return user.id;
};

const create = async ({ email, lastName, firstName }) => {
  const user = await User.create({
    email,
    lastName,
    firstName,
  });
  return user.id;
};

module.exports = {
  checkIfExist,
};
