const Role = require('../models/roleModel');

const removeRoleById = async (id) => {
    return await Role.findByIdAndDelete(id);
};

module.exports = { removeRoleById };
