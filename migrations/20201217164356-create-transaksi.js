'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transaksis', {
      id_transaksi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      kode_transaksi: {
        type: Sequelize.STRING
      },
      tgl_transaksi: {
        type: Sequelize.DATE
      },
      id_penyewa: {
        type: Sequelize.INTEGER
      },
      id_kosan: {
        type: Sequelize.INTEGER
      },
      n_kamar: {
        type: Sequelize.INTEGER
      },
      nominal: {
        type: Sequelize.INTEGER
      },
      status_transaksi: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('transaksi');
  }
};