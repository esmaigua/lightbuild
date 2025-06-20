const profileService = require('../services/profile.service');

exports.createProfile = async (req, res) => {
  try {
    const profile = await profileService.createProfile(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await profileService.getProfileByUserId(req.params.userId);
    if (!profile) return res.status(404).json({ message: 'Perfil no encontrado' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const profile = await profileService.updateProfileByUserId(req.params.userId, req.body);
    if (!profile) return res.status(404).json({ message: 'Perfil no encontrado' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
