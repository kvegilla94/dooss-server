const express = require("express");
const bookingController = require("../controllers/booking");
const router = express.Router();

router.post("/", bookingController.create);

router.get("/:id", bookingController.getBookingsById);

router.get("/", (req, res) => {
  res.send("Get All Booking route");
});

module.exports = router;
