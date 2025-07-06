const { listAddresses } = require("../services/addressService");

const list = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) return res.status(400).json({ error: "Parámetro user_id requerido" });

    const addresses = await listAddresses(user_id);
    res.status(200).json(addresses);
  } catch (err) {
    console.error("❌ Error al listar direcciones:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { list };