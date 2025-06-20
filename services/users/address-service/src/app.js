const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const addressRoutes = require('./routes/address.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/addresses', addressRoutes);

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('[address-service] Conectado a MongoDB');
    app.listen(PORT, () => console.log(`[address-service] Escuchando en puerto ${PORT}`));
  })
  .catch(err => console.error('Error al conectar MongoDB:', err));
