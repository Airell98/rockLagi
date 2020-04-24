'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'JurusanMateris',
			[
				{
					JurusanId: 1,
					MateriId: 5,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 1,
					MateriId: 7,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 1,
					MateriId: 8,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 1,
					MateriId: 9,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 1,
					MateriId: 10,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 1,
					MateriId: 11,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 1,
					MateriId: 12,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 2,
					MateriId: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 2,
					MateriId: 7,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 2,
					MateriId: 8,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 2,
					MateriId: 9,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					JurusanId: 2,
					MateriId: 10,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 2,
					MateriId: 11,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 2,
					MateriId: 12,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 3,
					MateriId: 6,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 3,
					MateriId: 7,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 3,
					MateriId: 8,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 3,
					MateriId: 9,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 3,
					MateriId: 10,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 3,
					MateriId:11,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 3,
					MateriId: 12,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 4,
					MateriId: 4,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 4,
					MateriId: 7,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 4,
					MateriId: 8,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 4,
					MateriId: 9,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 4,
					MateriId: 10,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 4,
					MateriId: 11,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 4,
					MateriId: 12,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 5,
					MateriId: 3,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 5,
					MateriId: 7,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 5,
					MateriId: 8,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 5,
					MateriId: 9,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 5,
					MateriId: 10,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 5,
					MateriId: 11,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 5,
					MateriId: 12,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 6,
					MateriId: 1,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 6,
					MateriId: 7,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 6,
					MateriId: 8,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 6,
					MateriId: 9,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 6,
					MateriId: 10,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 6,
					MateriId: 11,
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
					JurusanId: 6,
					MateriId: 12,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
