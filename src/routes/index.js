const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const bookingRouter = require("./booking");

router.use("/user", userRouter);
router.use("/booking", bookingRouter);

module.exports = router;