const Profile = require('../models/profileModel');

const updateProfileByUserId = async (userId, data) => {
  const updated = await Profile.findOneAndUpdate({ userId }, data, {
    new: true,
    runValidators: true
  });
  if (!updated) throw new Error('Perfil no encontrado');
  return updated;
};

module.exports = { updateProfileByUserId };
