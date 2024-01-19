"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.removeColumn("Bookings", "schedule");
    queryInterface.addColumn("Bookings", "date", {
      type: Sequelize.DATE,
    });

    queryInterface.addColumn("Bookings", "time", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.addColumn("Bookings", "schedule", {
      type: Sequelize.DATE,
    });
    queryInterface.removeColumn("Bookings", "date");
    queryInterface.removeColumn("Bookings", "time");
  },
};
