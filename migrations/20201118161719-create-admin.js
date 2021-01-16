'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('admins', {
      id_admin: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      nama_admin: {
        type: Sequelize.STRING(100)
      },
      email_admin: {
        type: Sequelize.STRING(30)
      },
      username_admin: {
        type: Sequelize.STRING(30)
      },
      password_admin: {
        type: Sequelize.STRING(30)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('admins');
  }
};