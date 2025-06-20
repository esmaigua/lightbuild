const addressService = require('../services/address.service');

exports.createAddress = async (req, res) => {
  try {
    const address = await addressService.createAddress(req.body);
    res.status(201).json(address);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAddressesByUserId = async (req, res) => {
  try {
    const addresses = await addressService.getAddressesByUserId(req.params.userId);
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const updated = await addressService.updateAddress(req.params.addressId, req.body);
    if (!updated) return res.status(404).json({ message: 'Dirección no encontrada' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const deleted = await addressService.deleteAddress(req.params.addressId);
    if (!deleted) return res.status(404).json({ message: 'Dirección no encontrada' });
    res.json({ message: 'Dirección eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
