const express = require("express");
const router = express.Router();
const { User, Booking } = require("../../db/models");

router.post("/", async (req, res) => {
  const data = {
    firstName: "Kelvin",
    lastName: "Vegilla",
    email: "kelvin.vegilla.715@gmail.com",
  };

  const user = await User.create(data);
  res.status(201).json({
    success: true,
    data,
  });
});

router.get("/", async (req, res) => {
  const users = await User.findAll({
    include: [{ model: Booking, as: "bookings" }],
  });
  res.status(201).json({
    success: true,
    data: users,
  });
});

module.exports = router;
