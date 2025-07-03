const express = require('express');
const router = express.Router();
const { updateProfileHandler } = require('../controllers/profileController');

router.put('/:userId', updateProfileHandler);

module.exports = router;
