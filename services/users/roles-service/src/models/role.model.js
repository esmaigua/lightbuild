const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ['admin', 'cliente', 'proveedor'],
    default: 'cliente'
  }
});

module.exports = mongoose.model('Role', RoleSchema);
