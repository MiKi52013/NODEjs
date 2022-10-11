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
    return queryInterface.bulkInsert('Users', [{

      email: 'admin@gmail.com',
      password: '123456', //plain text dfhjdhfbbgfsdh => hash password
      firstName: 'Movex',
      lastName: 'MiKi',
      address: 'USA',
      phoneNumber: '123456789',
      gender: 1,
      roleId: 'ROLE',
      image: 'A',
      positionId: 'B',

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
