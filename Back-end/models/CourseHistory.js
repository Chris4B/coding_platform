module.exports = (sequelize, DataTypes) => {
    const CourseHistory = sequelize.define("CourseHistory", {
        version: {
            type: DataTypes.STRING,
            allowNull: false, 
        }, 
        changes: {
            type: DataTypes.JSON, 
        },
    }); 
}