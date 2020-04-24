'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Jurusans',
			[
				{
					name: 'Bass',
					startDate: '2020-01-01',
					batch: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Gitar',
					startDate: '2020-01-01',
					batch: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Piano',
					startDate: '2020-01-01',
					batch: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Drum',
					startDate: '2020-01-01',
					batch: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Vocal',
					startDate: '2020-01-01',
					batch: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Biola',
					startDate: '2020-01-01',
					batch: 1,
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
    return queryInterface.bulkDelete('Jurusans', null, {});
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
