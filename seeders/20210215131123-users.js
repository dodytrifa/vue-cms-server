'use strict';
const { hash } = require('../helpers/bcrypt')
// let hashedPass = hash("123456")
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: "admin1@mail.com",
        password: hash("123451"),
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user1@mail.com",
        password: "passuser1",
        role: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
