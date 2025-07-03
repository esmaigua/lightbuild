const { deleteProfileByUserId } = require('../services/profileService');
//Perfil delete test new
const deleteProfileHandler = async (req, res) => {
  try {
    const result = await deleteProfileByUserId(req.params.userId);
    res.json({ message: 'Perfil eliminado', data: result });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { deleteProfileHandler };
