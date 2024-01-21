const express = require("express");
const { dentistController } = require("../controllers");
const router = express.Router();

router.get("/", dentistController.getAll);

module.exports = router;
