const Address = require("../models/addressModel");

const updateAddress = async (_id, updates) => {
  return await Address.findOneAndUpdate(
    { _id, deleted_at: null },
    { $set: updates },
    { new: true }
  );
};

module.exports = { updateAddress };