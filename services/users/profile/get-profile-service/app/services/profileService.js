const Profile = require('../models/profileModel');

const getProfileByUserId = async (userId) => {
  const profile = await Profile.findOne({ userId });
  if (!profile) throw new Error('Perfil no encontrado');
  return profile;
};

module.exports = { getProfileByUserId };
