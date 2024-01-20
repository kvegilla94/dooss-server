const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { User, Booking } = require("../../db/models");

router.post("/generateOtp", userController.generateOtp);

router.post("/login", userController.login);

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
