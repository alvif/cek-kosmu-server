'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('tblkos', [
      {
        id_kos: 1,
        id_pemilik: 2,
        nama_kos: 'foo1',
        alamat_kos: 'Belakang STIKOM',
        luas_kamar: 10,
        jarak_kos: 1,
        jumlah_kamar: 15,
        kamar_dipesan: 0,
        kamar_dihuni: 0,
        fasilitas: 'tes,tes1,tes2',
        harga_sewa: 325000,
        status_kosan: 'verified',
        img: 'image-1608049910729.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id_kos: 2,
        id_pemilik: 3,
        nama_kos: 'foo2',
        alamat_kos: 'Belakang STIKOM',
        luas_kamar: 6,
        jarak_kos: 1,
        jumlah_kamar: 7,
        kamar_dipesan: 0,
        kamar_dihuni: 0,
        fasilitas: 'tes,tes1,tes2',
        harga_sewa: 325000,
        status_kosan: 'verified',
        img: 'image-1605902576753.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id_kos: 3,
        id_pemilik: 1,
        nama_kos: 'foo3',
        alamat_kos: 'Belakang STIKOM',
        luas_kamar: 10,
        jarak_kos: 1,
        jumlah_kamar: 12,
        kamar_dipesan: 0,
        kamar_dihuni: 0,
        fasilitas: 'tes,tes1,tes2',
        harga_sewa: 325000,
        status_kosan: 'verified',
        img: 'image-1608049910729.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id_kos: 4,
        id_pemilik: 5,
        nama_kos: 'foo4',
        alamat_kos: 'Belakang STIKOM',
        luas_kamar: 10,
        jarak_kos: 1,
        jumlah_kamar: 8,
        kamar_dipesan: 0,
        kamar_dihuni: 0,
        fasilitas: 'tes,tes1,tes2',
        harga_sewa: 325000,
        status_kosan: 'after register',
        img: 'image-1608049910729.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id_kos: 5,
        id_pemilik: 4,
        nama_kos: 'foo5',
        alamat_kos: 'Belakang STIKOM',
        luas_kamar: 10,
        jarak_kos: 1,
        jumlah_kamar: 10,
        kamar_dipesan: 0,
        kamar_dihuni: 0,
        fasilitas: 'tes,tes1,tes2',
        harga_sewa: 325000,
        status_kosan: 'after registered',
        img: 'image-1608049910729.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tblkos', null, {});
  }
};