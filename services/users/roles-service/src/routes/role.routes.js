const express = require('express');
const router = express.Router();
const controller = require('../controllers/role.controller');

router.post('/', controller.createOrUpdateRole);
router.get('/:userId', controller.getRoleByUserId);

module.exports = router;
