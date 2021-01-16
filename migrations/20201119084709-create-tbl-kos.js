'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tblkos', {
      id_kos: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      id_pemilik: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nama_kos: {
        type: Sequelize.STRING(100)
      },
      alamat_kos: {
        type: Sequelize.STRING
      },
      luas_kamar: {
        type: Sequelize.INTEGER(5)
      },
      jarak_kos: {
        type: Sequelize.INTEGER(5)
      },
      jumlah_kamar: {
        type: Sequelize.INTEGER(5)
      },
      kamar_dipesan: {
        type: Sequelize.INTEGER(5)
      },
      kamar_dihuni: {
        type: Sequelize.INTEGER(5)
      },
      fasilitas:{
        type: Sequelize.STRING
      },
      harga_sewa: {
        type: Sequelize.INTEGER
      },
      status_kosan: {
        type: Sequelize.STRING
      },
      img: {
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
    await queryInterface.dropTable('tblkos');
  }
};