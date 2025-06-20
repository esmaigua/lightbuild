const express = require('express');
const router = express.Router();
const controller = require('../controllers/address.controller');

router.post('/', controller.createAddress);
router.get('/:userId', controller.getAddressesByUserId);
router.put('/:addressId', controller.updateAddress);
router.delete('/:addressId', controller.deleteAddress);

module.exports = router;
