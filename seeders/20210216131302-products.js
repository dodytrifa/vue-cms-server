'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: "Galaxy Note 10",
        image_url: "https://cdn.gsmarena.com/imgroot/news/19/05/galaxy-note10-render/-727/gsmarena_001.jpg",
        price: 50000000,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Motorola P30",
        image_url: "https://cdn.gsmarena.com/imgroot/news/18/08/motorola-p30/-728/gsmarena_007.jpg",
        price: 8000000,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Galaxy M20",
        image_url: "https://cdn.gsmarena.com/imgroot/news/18/12/galaxy-m20-specs-leak/-728/gsmarena_000.jpg",
        price: 9000000,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Galaxy S21",
        image_url: "https://fdn.gsmarena.com/imgroot/news/20/11/samsung-galaxy-s21-bis-certified/-315/gsmarena_002.jpg",
        price: 14000000,
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Xiaomi Mi 11",
        image_url: "https://fdn.gsmarena.com/imgroot/news/20/12/xiaomi-mi-11-dec-29/-1220x526/gsmarena_002.jpg",
        price: 10000000,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Redmi Note 8 Pro",
        image_url: "https://fdn.gsmarena.com/imgroot/news/19/08/redmi-note-8-pro-ofic/-727/gsmarena_003.jpg",
        price: 11000000,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {})
  }
};
