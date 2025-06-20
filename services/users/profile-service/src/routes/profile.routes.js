const express = require('express');
const router = express.Router();
const controller = require('../controllers/profile.controller');

router.post('/', controller.createProfile);
router.get('/:userId', controller.getProfile);
router.put('/:userId', controller.updateProfile);

module.exports = router;
