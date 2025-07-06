const Role = require('../models/roleModel');

const getAllRoles = async () => {
    return await Role.find();
};

module.exports = { getAllRoles };
