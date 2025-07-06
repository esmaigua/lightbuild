const Address = require("../models/addressModel");

const deleteAddress = async (_id) => {
  return await Address.findOneAndUpdate(
    { _id, deleted_at: null },
    { $set: { deleted_at: new Date() } },
    { new: true }
  );
};

module.exports = { deleteAddress };