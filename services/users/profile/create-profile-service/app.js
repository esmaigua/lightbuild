const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const profileRoutes = require('./app/routes/profileRoutes');
const connectDB = require('./app/db/connection');

dotenv.config();
const app = express();
const swaggerDoc = YAML.load('./swagger/swagger.yaml');

app.use(express.json());
connectDB();

app.use('/users/profiles', profileRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
