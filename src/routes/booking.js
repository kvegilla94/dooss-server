const express = require("express");
const { bookingController } = require("../controllers");
const router = express.Router();

router.post("/", bookingController.create);

router.get("/:id", bookingController.getBookingsById);

router.patch("/:id", bookingController.update);

router.get("/", (req, res) => {
  res.send("Get All Booking route");
});

module.exports = router;
