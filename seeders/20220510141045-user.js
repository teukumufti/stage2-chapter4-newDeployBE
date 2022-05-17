"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "admin@gmail.com",
        password:
          "$2b$10$vjmMwTKS7ExyBRDmOfaCuO9DxzakVAlVxs/eIDFXDmzfbv5EGeo6C", //1234567
        name: "Admin",
        status: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    // await queryInterface.bulkInsert(
    //   "users",
    //   [
    //     {
    //       email: "admin@gmail.com",
    //       password:
    //         "$2b$10$vjmMwTKS7ExyBRDmOfaCuO9DxzakVAlVxs/eIDFXDmzfbv5EGeo6C", //1234567
    //       name: "Admin",
    //       status: "admin",
    //     },
    //   ],
    //   {}
    // );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
