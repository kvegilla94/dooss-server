const express = require("express");
const bookingController = require("../controllers/booking");
const router = express.Router();

router.post("/", bookingController.create);

router.get("/", (req, res) => {
  res.send("Get All Booking route");
});
router.get("/:id", (req, res) => {
  res.send("Get All Booking by UserId route");
});

module.exports = router;
