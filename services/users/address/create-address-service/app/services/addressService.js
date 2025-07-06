const Address = require("../models/addressModel");

const createAddress = async (userId, data) => {
  const newAddress = new Address({ user_id: userId, ...data });
  return await newAddress.save();
};

module.exports = { createAddress };