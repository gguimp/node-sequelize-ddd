'use strict';

const dataFaker = require('src/infra/support/dataFaker');

module.exports = {
  up: function (queryInterface) {
    const testUsers = [];

    for(let i = 0; i < 20; i++) {
      testUsers.push({
        name: dataFaker.name(),
        companyId: dataFaker.integer({min:1, max:10}),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert('users', testUsers, {});
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
