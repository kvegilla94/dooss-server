const { addMinutes, isBefore } = require("date-fns");
const { User, OTP, Booking } = require("../../db/models");
const checkIfExist = async ({ email, lastName, firstName }) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    if (lastName && firstName) {
      return await create({ lastName, firstName, email });
    } else {
      return null;
    }
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

const generateOtp = async (userId) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  await OTP.create({ userId, otp });
};

const login = async (userId, otp) => {
  const data = await OTP.findOne({
    where: { userId },
    order: [["id", "desc"]],
  });

  if (data.otp !== otp) return { success: false, message: "Invalid OTP" };
  if (isBefore(addMinutes(data.createdAt, 5), new Date()))
    return { success: false, message: "OTP Expired" };
  return { success: true, message: "Logged in" };
};

const getUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    include: [{ model: Booking, as: "bookings" }],
    order: [[{ model: Booking, as: "bookings" }, "id", "DESC"]],
  });
  if (user) return { success: true, result: user };
  return { success: false, result: "User not found" };
};

module.exports = {
  checkIfExist,
  generateOtp,
  login,
  getUserById,
};
