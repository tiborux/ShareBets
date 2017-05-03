'use strict'

var Sequelize = require('sequelize');

//llamamos al paquete mysql que hemos instalado
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
var sequelize = new Sequelize('sharebet', 'root', '', {
    host: 'localhost',
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.usuarios = require('../models/usuario.js')(sequelize, Sequelize);

//Relations
db.usuarios.hasMany(db.usuarios);

module.exports = db;