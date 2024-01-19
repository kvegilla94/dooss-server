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

router.get("/:id", async (req, res) => {
  const users = await User.findOne({
    where: { id: req.params.id },
    include: [{ model: Booking, as: "bookings" }],
    order: [[{ model: Booking, as: "bookings" }, "id", "DESC"]],
  });
  res.status(201).json({
    success: true,
    data: users,
  });
});

module.exports = router;
