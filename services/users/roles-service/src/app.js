const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const roleRoutes = require('./routes/role.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/roles', roleRoutes);

const PORT = process.env.PORT || 3003;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('[roles-service] Conectado a MongoDB');
    app.listen(PORT, () => console.log(`[roles-service] Escuchando en puerto ${PORT}`));
  })
  .catch(err => console.error('Error al conectar MongoDB:', err));
