const { deleteAddress } = require("../services/addressService");

const softDelete = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) return res.status(400).json({ error: "ID requerido para eliminar" });

    const deleted = await deleteAddress(_id);
    if (!deleted) return res.status(404).json({ error: "Dirección no encontrada o ya eliminada" });

    res.status(200).json({ message: "Dirección eliminada correctamente" });
  } catch (err) {
    console.error("❌ Error al eliminar dirección:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { softDelete };
