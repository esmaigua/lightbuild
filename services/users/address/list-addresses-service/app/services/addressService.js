const Address = require("../models/addressModel");

const listAddresses = async (userId) => {
  return await Address.find({ user_id: userId, deleted_at: null });
};

module.exports = { listAddresses };