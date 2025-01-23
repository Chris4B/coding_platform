const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const lessonRoutesV1 = require("./v1/routes/lessons");
const swaggerConfig = require("./config/swagger"); // Importez la configuration Swagger

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Documentation Swagger
swaggerConfig(app);

// Routes
app.use("/api/v1/lessons", lessonRoutesV1);

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available on http://localhost:${PORT}/api-docs`);
});
