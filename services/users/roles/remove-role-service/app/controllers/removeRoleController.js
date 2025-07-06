const { removeRoleById } = require('../services/removeRoleService');
//New test
const removeRoleHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await removeRoleById(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.status(200).json({ message: 'Role removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing role', error: error.message });
    }
};

module.exports = { removeRoleHandler };
