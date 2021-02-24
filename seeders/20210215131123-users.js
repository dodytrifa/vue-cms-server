'use strict';
const { hash } = require('../helpers/bcrypt')

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
        password: hash("passuser1"),
        role: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
