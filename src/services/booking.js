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

module.exports = {
  create,
};
