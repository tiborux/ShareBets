const Sequelize = require('sequelize');
const fs = require('fs');

const db = new Sequelize('sharebet', 'root', '', {
	host: 'localhost',
});

fs.readdirSync('./models')
	.forEach((file) => {
		require(`../models/${file}`)(db, Sequelize)
	})

Object.keys(db.models).forEach(function (modelName) {

	if ("associate" in db.models[modelName]) {
		db.models[modelName].associate(db.models);
	}
});
var cron = require('node-cron');
cron.schedule('0 0 */1 * * *', function () {
	var currentdate = new Date();

	db.models['apuestas'].findAll({
		where: {
			fecha_expires: {
				$lt: currentdate
			}
		}
	})
		.then((apuestas) => {
			for (let apuesta of apuestas) {
				db.models['usuarios_apuestas'].destroy({
					where: {
						estado: false,
						id_apuesta: apuesta.id
					}
				});
			}
		});
});
/*db.models['apuestas'].destroy({
	where: {
		fecha_expires: {
				$lt: currentdate
			}
	},
	include: [{
		model: db.models['usuarios_apuestas'],
		where: {
			estado: false,
			id_apuesta: 
		}
	}]
});*/
module.exports = db;
