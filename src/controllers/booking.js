const userService = require("../services/user");
const bookingService = require("../services/booking");

const create = async (req, res) => {
  const { firstName, lastName, email, schedule, dentistId, appointmentType } =
    req.body;
  // Check if user exists, create if not;
  const userId = await userService.checkIfExist({ email, firstName, lastName });
  // Create booking
  const bookingId = await bookingService.create({
    userId,
    schedule,
    dentistId,
    appointmentType,
  });
  res.status(200).json({ success: true, data: { bookingId } });
};

module.exports = {
  create,
};
