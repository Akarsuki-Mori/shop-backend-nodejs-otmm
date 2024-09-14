'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.INTEGER(10)
    })
  },

  async down(queryInterface, Sequelize) {

  }
};
