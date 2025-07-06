const express = require("express");
const router = express.Router();
const { create } = require("../controllers/addressController");

router.post("/create-address", create);

module.exports = router;