"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          title: "Create Schema",
          description: "this ia A",
          severity: "High",
          isCompleted: false,
          dueDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Create Database",
          description: "this is B",
          severity: "Medium",
          dueDate: new Date()
        },
        {
          title: "Create APIs",
          description: "this is C",
          severity: "Low",
          dueDate: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Items", null, {});
  }
};
