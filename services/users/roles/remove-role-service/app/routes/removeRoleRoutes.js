const express = require('express');
const { removeRoleHandler } = require('../controllers/removeRoleController');
const router = express.Router();

router.delete('/:id', removeRoleHandler);

module.exports = router;
