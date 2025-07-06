const { updateAddress } = require("../services/addressService");

const update = async (req, res) => {
  try {
    const { _id, ...updates } = req.body;
    if (!_id) return res.status(400).json({ error: "ID requerido para actualizar" });

    const updated = await updateAddress(_id, updates);
    if (!updated) return res.status(404).json({ error: "Dirección no encontrada" });

    res.status(200).json(updated);
  } catch (err) {
    console.error("❌ Error al actualizar dirección:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { update };
