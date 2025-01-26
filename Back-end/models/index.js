const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Charger uniquement les fichiers qui retournent un modèle Sequelize
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && // Ignore les fichiers cachés
      file !== basename && // Ignore index.js
      file.slice(-3) === ".js" // Ne prend que les fichiers .js
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    if (model && model.name) { // Vérifie que le fichier retourne un modèle valide
      db[model.name] = model;
    } else {
      console.warn(`Le fichier ${file} n'a pas retourné de modèle valide.`);
    }
  });

// Configurer les associations (si elles existent)
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
