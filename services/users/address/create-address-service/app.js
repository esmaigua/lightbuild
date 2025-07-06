const express = require("express");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const connectDB = require("./app/db/connection");
const addressRoutes = require("./app/routes/addressRoutes");

dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(YAML.load("./swagger/swagger.yaml")));
app.use("/", addressRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`🚀 Servicio activo en puerto ${PORT}`));