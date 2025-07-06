const { getAllRoles } = require('../services/listRolesService');
//new
const listRolesHandler = async (req, res) => {
    try {
        const roles = await getAllRoles();
        res.status(200).json({ data: roles });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving roles', error: error.message });
    }
};

module.exports = { listRolesHandler };
