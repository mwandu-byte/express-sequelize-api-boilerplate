

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'mwandu',
        lastName: 'meshack',
        email: 'mwandu@gmail.com',
        password: '123456', // 👉 You should hash this if used in real app
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'neema',
        lastName: 'mwandu',
        email: 'neema@gmail.com',
        password: '123456',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

