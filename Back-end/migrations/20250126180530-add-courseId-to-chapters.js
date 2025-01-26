'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn("Chapters","courseId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Courses",
        key: "id",
      },
      onUpdate: "CASCADE"
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Chapters", "courseId");
  }
};
