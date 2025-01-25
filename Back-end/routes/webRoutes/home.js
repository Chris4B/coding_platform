const express = require("express");
const router = express.Router();

// Route pour la racine
router.get("/", (req, res) => {
  res.send("Welcome to the Coding Platform!");
});

module.exports = router;
