const express = require('express');
const router = express.Router();
const { deleteProfileHandler } = require('../controllers/profileController');

router.delete('/:userId', deleteProfileHandler);

module.exports = router;
