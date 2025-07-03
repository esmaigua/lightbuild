const express = require('express');
const router = express.Router();
const { getProfileHandler } = require('../controllers/profileController');

router.get('/:userId', getProfileHandler);

module.exports = router;
