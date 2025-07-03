const Profile = require('../models/profileModel');

const deleteProfileByUserId = async (userId) => {
  const deleted = await Profile.findOneAndDelete({ userId });
  if (!deleted) throw new Error('Perfil no encontrado');
  return deleted;
};

module.exports = { deleteProfileByUserId };
