const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const lessonRoutesV1 = require("./routes/api/v1/lessons"); // Chemin relatif correct


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());



// Routes
app.use("/api/v1/lessons", lessonRoutesV1); 
// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  
});
