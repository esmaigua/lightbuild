const { updateProfileByUserId } = require('../services/profileService');

const updateProfileHandler = async (req, res) => {
  try {
    const result = await updateProfileByUserId(req.params.userId, req.body);
    res.json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { updateProfileHandler };
