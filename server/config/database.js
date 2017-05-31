const Sequelize = require('sequelize');
const fs = require('fs');

const db = new Sequelize('sharebet', 'root', '', {
    host: 'localhost',
});

fs.readdirSync('./models')
.forEach((file) => {
  require(`../models/${file}`)(db, Sequelize)
})

Object.keys(db.models).forEach(function(modelName) {
  
		if ("associate" in db.models[modelName]) {
			db.models[modelName].associate(db.models);
		}
	});

module.exports = db;
