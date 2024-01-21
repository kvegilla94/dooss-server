const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();

router.get("/:id", userController.getUserById);

module.exports = router;
