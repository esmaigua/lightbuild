const { getProfileByUserId } = require('../services/profileService');

const getProfileHandler = async (req, res) => {
  try {
    const profile = await getProfileByUserId(req.params.userId);
    res.json(profile);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getProfileHandler };
