const Role = require('../models/role.model');

exports.createOrUpdateRole = async ({ userId, role }) => {
  return await Role.findOneAndUpdate(
    { userId },
    { role },
    { upsert: true, new: true }
  );
};

exports.getRoleByUserId = async (userId) => {
  return await Role.findOne({ userId });
};
