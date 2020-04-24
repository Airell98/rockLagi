'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Materis',
			[
				{
				
					name: 'Mayor Biola',
					startDate: '2020-01-22',
					hari: 'Senin-Selasa',
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {

					name: 'Mayor Gitar',
					startDate: '2020-01-22',
					hari: 'Senin-Selasa',
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {

					name: 'Mayor Vocal',
					startDate: '2020-01-22',
					hari: 'Senin-Selasa',
					createdAt: new Date(),
					updatedAt: new Date()
        },

        {

					name: 'Mayor Drum',
					startDate: '2020-01-22',
					hari: 'Senin-Selasa',
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {

					name: 'Mayor Bass',
					startDate: '2020-01-22',
					hari: 'Senin-Selasa',
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {

					name: 'Mayor Piano',
					startDate: '2020-01-22',
					hari: 'Senin-Selasa',
					createdAt: new Date(),
					updatedAt: new Date()
        },
				{
					name: 'Kontrapung',
					startDate: '2020-01-22',
					hari: 'Selasa',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Assemble',
					startDate: '2020-01-22',
					hari: 'Rabu-Jumat',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Reading Partiture',
					startDate: '2020-01-22',
					hari: 'Jumat',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Filsafat Musik',
					startDate: '2020-01-22',
					hari: 'Selasa',
					createdAt: new Date(),
					updatedAt: new Date()
        },
        {
          name: 'Solfegio',
					startDate: '2020-01-22',
					hari: 'Kamis',
					createdAt: new Date(),
					updatedAt: new Date()
        },  
        {
          name: 'Harmony',
					startDate: '2020-01-22',
					hari: 'Rabu',
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
      }], {}); createdAt: new Date()
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
