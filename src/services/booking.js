const { Booking, Dentist } = require("../../db/models");

const create = async ({ userId, date, time, appointmentType, dentistId }) => {
  const bookingData = {
    bookedBy: userId,
    date,
    time,
    dentistId,
    appointmentType,
    status: "BOOKED",
  };

  const booking = await Booking.create(bookingData);
  return booking.id;
};

const getBookingsById = (bookingId) => {
  const bookings = Booking.findOne({
    where: { id: bookingId },
    include: [{ model: Dentist, as: "dentist" }],
  });
  return bookings;
};

const update = (id, data) => {
  const booking = Booking.update(data, {
    where: {
      id,
    },
  });

  return booking;
};

module.exports = {
  create,
  getBookingsById,
  update,
};
