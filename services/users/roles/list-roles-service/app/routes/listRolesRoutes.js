const express = require('express');
const { listRolesHandler } = require('../controllers/listRolesController');
const router = express.Router();

router.get('/', listRolesHandler);

module.exports = router;
