'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'manufactures',
        {name: {type: Sequelize.STRING, primaryKey: true, allowNull: false}});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('manufactures');
  }
};