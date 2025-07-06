const express = require("express");
const router = express.Router();
const { update } = require("../controllers/addressController");

router.put("/", update);

module.exports = router;
