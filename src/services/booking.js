const { Booking } = require("../../db/models");

const create = async ({ userId, date, time, appointmentType, dentistId }) => {
  const bookingData = {
    bookedBy: userId,
    date,
    time,
    dentistId,
    appointmentType,
  };

  const booking = await Booking.create(bookingData);
  return booking.id;
};

const getBookingsById = (bookingId) => {
  const bookings = Booking.findOne({
    where: { id: bookingId },
  });
  return bookings;
};

module.exports = {
  create,
  getBookingsById,
};
