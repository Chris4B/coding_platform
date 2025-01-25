'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

      await queryInterface.createTable("Courses", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        }, 
        name: {
          type: Sequelize.STRING(20),
          allowNull: false
        }, description: {
          type: Sequelize.TEXT, 
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING(10), 
          defaultValue: "active",
        },
        ImageUrl: {
          type: Sequelize.STRING,
          defaultValue: "1.0.0",

        },
        techVersion: {
          type: Sequelize.STRING(10),
          allowNull: false
        },
        courseVersion: {
          type: Sequelize.STRING(10),
          defaultValue: "1.0.0"
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          type: Sequelize.STRING,
          defaultValue: "1.0.0"
        }
        
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Courses");
  }
};
