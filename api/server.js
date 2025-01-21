const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const lessonRoutes = ('./routes/lessons');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/lessons', lessonRoutes);

// Démarrer le serveur 
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http:// localhost:${PORT}`)
});



