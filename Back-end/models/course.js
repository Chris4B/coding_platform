module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define(
      "Course",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [3, 20], 
          },
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            len: [10, 500], // Entre 10 et 500 caractères
          },
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [3, 50],
          },
        },
        status: {
          type: DataTypes.STRING,
          defaultValue: "draft",
          validate: {
            isIn: [["Draft", "Review", "Published", "Archived"]],
          }, 
        },
        imageUrl: {
          type: DataTypes.STRING,
          defaultValue: null,
          validate: {
            isUrl: true, 
          },
        },
        courseVersion: {
          type: DataTypes.STRING,
          defaultValue: "1.0.0",
          validate: {
            is: /^\d+\.\d+\.\d+$/, // Format X.Y.Z
          },
        },
        techVersion: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [3, 20], // Entre 3 et 50 caractères
          },
        },
      },
      {
        timestamps: true,
      }
    );
  
    // Méthode pour incrémenter automatiquement la version
    Course.prototype.incrementCoruseVersion = function () {
      const versionParts = this.courseVersion.split(".").map(Number);
      versionParts[1] += 1;
      versionParts[2] = 0;
      this.courseVersion = versionParts.join(".");
    };
  
    return Course;
  };
  