const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const profileRoutes = require('./routes/profile.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/profiles', profileRoutes);

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('[profile-service] Conectado a MongoDB');
    app.listen(PORT, () => console.log(`[profile-service] Escuchando en puerto ${PORT}`));
  })
  .catch(err => console.error('Error al conectar MongoDB:', err));
