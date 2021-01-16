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
    await queryInterface.bulkInsert('admins', [{
      id_admin: 1,
      nama_admin: 'Alvif Sandana Mahardika',
      email_admin: 'alvifsandana@gmail.com',
      username_admin: 'alvif',
      password_admin: '240800',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id_admin: 2,
      nama_admin: 'Khoirunnisa',
      email_admin: 'khns1710@gmail.com',
      username_admin: 'nisaa',
      password_admin: '171000',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('admins', null, {});
  }
};