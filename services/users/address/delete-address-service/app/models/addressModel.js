const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  street: String,
  city: String,
  state: String,
  postal_code: String,
  country: String,
  is_primary: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  deleted_at: { type: Date, default: null }
});

module.exports = mongoose.model("Address", addressSchema);
