const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.Define("Tag", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Tag;
}