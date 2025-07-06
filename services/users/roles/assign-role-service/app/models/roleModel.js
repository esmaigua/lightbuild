const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    role: { type: String, required: true },
    assignedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Role', roleSchema);
