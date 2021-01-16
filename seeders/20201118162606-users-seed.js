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
    await queryInterface.bulkInsert('users', [
      {
        id_user: 1,
        nama_user: 'Alvif Sandana',
        alamat_user: 'Kebalen Lor',
        telpon_user: '081386219341',
        email_user: 'alvifsandana@example.com',
        username: 'alvifsan',
        password: 'test12345',
        tgllahir: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_user: 2,
        nama_user: 'Khoirunnisa',
        alamat_user: 'Indragiri',
        telpon_user: '081775512345',
        email_user: 'nisaa@example.com',
        username: 'nisaa',
        password: 'test12345',
        tgllahir: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_user: 3,
        nama_user: 'Asrofi Hamdani',
        alamat_user: 'Kebalen Lor',
        telpon_user: '081345678901',
        email_user: 'asrofi@example.com',
        username: 'rofi',
        password: 'test12345',
        tgllahir: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_user: 4,
        nama_user: 'Laura Deswita Putri',
        alamat_user: 'Kebalen Lor',
        telpon_user: '082345678900',
        email_user: 'laura@example.com',
        username: 'lauraa',
        password: 'test12345',
        tgllahir: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_user: 5,
        nama_user: 'Naura Salsabila',
        alamat_user: 'Kebalen Kidul',
        telpon_user: '081245654321',
        email_user: 'rara@example.com',
        username: 'raraa',
        password: 'test12345',
        tgllahir: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
