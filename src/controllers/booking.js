const userService = require("../services/user");
const bookingService = require("../services/booking");

const create = async (req, res) => {
  const { firstName, lastName, email, date, time, dentist, appointmentType } =
    req.body;
  // Check if user exists, create if not;
  const user = await userService.checkIfExist({ email, firstName, lastName });
  // Create booking
  const bookingId = await bookingService.create({
    userId: user.id,
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

const update = async (req, res) => {
  const booking = await bookingService.update(req.params.id, req.body);
  res.status(200).json({ success: true, data: { message: "Booking updated" } });
};

module.exports = {
  create,
  getBookingsById,
  update,
};
