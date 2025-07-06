const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./app/db/connection');
const assignRoleRoutes = require('./app/routes/assignRoleRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3009;

app.use(cors());
app.use(express.json());

connectDB();
app.use('/assign-role', assignRoleRoutes);

app.listen(PORT, () => {
  console.log(`Assign Role Service running on port ${PORT}`);
});
