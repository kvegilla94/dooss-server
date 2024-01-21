const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const bookingRouter = require("./booking");
const authRouter = require("./auth");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/booking", bookingRouter);

module.exports = router;
