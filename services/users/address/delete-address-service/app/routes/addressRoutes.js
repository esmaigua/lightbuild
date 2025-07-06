const express = require("express");
const router = express.Router();
const { softDelete } = require("../controllers/addressController");

router.delete("/", softDelete);

module.exports = router;