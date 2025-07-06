const { assignRole } = require('../services/assignRoleService');
//new test
const assignRoleHandler = async (req, res) => {
    const { userId, role } = req.body;

    if (!userId || !role) {
        return res.status(400).json({ message: 'userId and role are required' });
    }

    try {
        const savedRole = await assignRole(userId, role);
        res.status(201).json({ message: 'Role assigned', data: savedRole });
    } catch (error) {
        res.status(500).json({ message: 'Error assigning role', error: error.message });
    }
};

module.exports = { assignRoleHandler };
