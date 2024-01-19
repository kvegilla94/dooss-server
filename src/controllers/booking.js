const userService = require("../services/user");
const bookingService = require("../services/booking");

const create = async (req, res) => {
  const { firstName, lastName, email, date, time, dentist, appointmentType } =
    req.body;
  // Check if user exists, create if not;
  const userId = await userService.checkIfExist({ email, firstName, lastName });
  // Create booking
  const bookingId = await bookingService.create({
    userId,
    date,
    time,
    dentistId: dentist,
    appointmentType,
  });
  res.status(200).json({ success: true, data: { bookingId } });
};

const getBookingsById = async (req, res) => {
  const bookings = await bookingService.getBookingsById(req.params.id);
  res.status(200).json({ success: true, data: bookings });
};

module.exports = {
  create,
  getBookingsById,
};
