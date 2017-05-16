const Sequelize = require('sequelize');
const fs = require('fs');

const db = new Sequelize('sharebet', 'root', '', {
    host: 'localhost',
});

fs.readdirSync('./models')
.forEach((file) => {
  require(`../models/${file}`)(db, Sequelize)
})
module.exports = db;
