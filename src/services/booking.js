const { Booking } = require("../../db/models");

const create = async ({ userId, schedule, appointmentType, dentistId }) => {
  const bookingData = {
    bookedBy: userId,
    schedule,
    dentistId,
    appointmentType,
  };

  const booking = await Booking.create(bookingData);
  return booking.id;
};

module.exports = {
  create,
};
