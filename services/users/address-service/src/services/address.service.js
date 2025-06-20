const Address = require('../models/address.model');

exports.createAddress = async (data) => {
  const address = new Address(data);
  return await address.save();
};

exports.getAddressesByUserId = async (userId) => {
  return await Address.find({ userId });
};

exports.updateAddress = async (addressId, updateData) => {
  return await Address.findByIdAndUpdate(addressId, updateData, { new: true });
};

exports.deleteAddress = async (addressId) => {
  return await Address.findByIdAndDelete(addressId);
};
