const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  phone: { type: String },
  birthDate: { type: Date },
  gender: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
