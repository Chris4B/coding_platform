module.exports = (sequelize, DataTypes) => {
    const Chapter = sequelize.define('Chapter', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
        }
    })

    return Chapter;
}