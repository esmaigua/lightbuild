const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const profileRoutes = require('./app/routes/profileRoutes');
const connectDB = require('./app/db/connection');

dotenv.config();
const app = express();
const swaggerDoc = YAML.load('./swagger/swagger.yaml');

connectDB();
app.use(express.json());
app.use('/users/profiles', profileRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`🚀 Update-profile-service running on port ${PORT}`));
