const Role = require('../models/roleModel');

const assignRole = async (userId, role) => {
    const newRole = new Role({ userId, role });
    return await newRole.save();
};

module.exports = { assignRole };
