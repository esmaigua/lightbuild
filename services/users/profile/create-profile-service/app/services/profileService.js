const Profile = require('../models/profileModel');

const createProfile = async (data) => {
  const newProfile = new Profile(data);
  return await newProfile.save();
};

module.exports = { createProfile };
