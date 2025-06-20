const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  addressLine: { type: String, required: true },
  city: String,
  province: String,
  postalCode: String,
  country: String,
  type: { type: String, enum: ['home', 'work', 'billing'], default: 'home' }
});

module.exports = mongoose.model('Address', AddressSchema);
