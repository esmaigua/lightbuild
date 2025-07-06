const express = require('express');
const { assignRoleHandler } = require('../controllers/assignRoleController');
const router = express.Router();

router.post('/', assignRoleHandler);

module.exports = router;
