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
    await queryInterface.bulkInsert('owners', [
      {
        id_owner: 1,
        nama_owner: 'Alvif Sandana Mahardika',
        alamat_owner: 'Rogojampi',
        TTL: 'BWI, 24 Agustus 2000',
        jk: 'L',
        no_telpon: '081345678900',
        email: 'asm240800@example.com',
        username: 'pang',
        password: 'test12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_owner: 2,
        nama_owner: 'Fangky Ristiawan',
        alamat_owner: 'Singojuruh',
        TTL: 'BWI, 01 September 2000',
        jk: 'L',
        no_telpon: '081234567890',
        email: 'pang@example.com',
        username: 'pang',
        password: 'test12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_owner: 3,
        nama_owner: 'Dheta',
        alamat_owner: 'Banyuwangi',
        TTL: 'null',
        jk: 'P',
        no_telpon: 'null',
        email: 'null@example.com',
        username: 'pang',
        password: 'test12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_owner: 4,
        nama_owner: 'foo',
        alamat_owner: 'Rogojampi',
        TTL: 'BWI, 24 Agustus 2000',
        jk: 'L',
        no_telpon: '081345678900',
        email: 'asm240800@example.com',
        username: 'pang',
        password: 'test12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_owner: 5,
        nama_owner: 'boo',
        alamat_owner: 'Kabat',
        TTL: 'null',
        jk: 'L',
        no_telpon: '081345678900',
        email: 'boo@example.com',
        username: 'pang',
        password: 'test12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('owners', null, {});
  }
};
