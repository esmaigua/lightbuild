const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./app/db/connection');
const listRolesRoutes = require('./app/routes/listRolesRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());

connectDB();
app.use('/list-roles', listRolesRoutes);

app.listen(PORT, () => {
  console.log(`List Roles Service running on port ${PORT}`);
});
