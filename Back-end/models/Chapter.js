module.exports = (sequelize, DataTypes) => {
    const Chapter = sequelize.define("Chapter", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
      },
      courseId: { // Ajout de la clé étrangère
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Courses", 
          key: "id", 
        },
      },
    });
  
    // Associations
    Chapter.associate = (models) => {
      Chapter.belongsTo(models.Course, {
        foreignKey: "courseId", 
        as: "course", 
        onDelete: "CASCADE", 
      });
    };
  
    return Chapter;
  };
  