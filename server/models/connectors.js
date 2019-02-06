import Sequelize from 'sequelize';

let sqlName = process.env.NODE_ENV === 'production' ? 'AdventureWorks' : 'testing';

const sqlite = new Sequelize('AdventureWorks', null, null, {
	dialect: 'sqlite',
	storage: `./${sqlName}.sqlite`,
	logging: false
});

export { sqlite };