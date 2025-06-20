const Profile = require('../models/profile.model');

exports.createProfile = async ({ userId, firstName, lastName, imageUrl }) => {
  const existing = await Profile.findOne({ userId });
  if (existing) throw new Error('Ya existe un perfil para este usuario');
  const profile = new Profile({ userId, firstName, lastName, imageUrl });
  return await profile.save();
};

exports.getProfileByUserId = async (userId) => {
  return await Profile.findOne({ userId });
};

exports.updateProfileByUserId = async (userId, updateData) => {
  return await Profile.findOneAndUpdate(
    { userId },
    updateData,
    { new: true }
  );
};
