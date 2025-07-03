const express = require('express');
const router = express.Router();
const { createProfileHandler } = require('../controllers/profileController');

router.post('/', createProfileHandler);

module.exports = router;
