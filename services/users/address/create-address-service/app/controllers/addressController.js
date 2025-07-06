const { createAddress } = require("../services/addressService");

const create = async (req, res) => {
  try {
    const { user_id } = req.body;
    if (!user_id) return res.status(400).json({ error: "user_id requerido" });

    const result = await createAddress(user_id, req.body);
    res.status(201).json(result);
  } catch (err) {
    console.error("❌ Error al crear dirección:", err);
    res.status(500).json({ error: "Error al crear dirección" });
  }
};

module.exports = { create };