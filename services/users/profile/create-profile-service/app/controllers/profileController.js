const { createProfile } = require('../services/profileService');
//new
const createProfileHandler = async (req, res) => {
  try {
    const result = await createProfile(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createProfileHandler };
