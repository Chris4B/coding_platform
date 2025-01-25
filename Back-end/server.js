const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");
const bodyParser = require("body-parser");
const lessonRoutesV1 = require("./routes/api/v1/lessons"); // Chemin relatif correct
const homeRoute = require("./routes/webRoutes/home");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/v1/lessons", lessonRoutesV1);
app.use("/", homeRoute);

// charger le fichier OpenAPI
const swaggerDocument = yaml.load("./docs/openapi.yaml");

// configurer Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available on http://localhost:${PORT}/api-docs`);
});
