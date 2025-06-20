const roleService = require('../services/role.service');

exports.createOrUpdateRole = async (req, res) => {
  try {
    const role = await roleService.createOrUpdateRole(req.body);
    res.status(201).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRoleByUserId = async (req, res) => {
  try {
    const role = await roleService.getRoleByUserId(req.params.userId);
    if (!role) return res.status(404).json({ message: 'Rol no encontrado' });
    res.json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
