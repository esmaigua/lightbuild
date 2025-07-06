const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./app/db/connection');
const removeRoleRoutes = require('./app/routes/removeRoleRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3011;

app.use(cors());
app.use(express.json());

connectDB();
app.use('/remove-role', removeRoleRoutes);

app.listen(PORT, () => {
  console.log(`Remove Role Service running on port ${PORT}`);
});
