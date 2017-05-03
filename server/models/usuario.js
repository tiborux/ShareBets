'use strict'

var bcrypt = require('bcryptjs');
module.exports = (sequelize, DataType) => {
    const User = sequelize.define('usuarios', {
        usuario: {
            type: DataType.STRING,
            unique: true
        },
        password: {
            type: DataType.STRING
        },
        email: {
            type: DataType.STRING,
            validate: {
                isEmail: true
            },
            unique: true
        },
        nombre: {
            type: DataType.STRING
        },
        apellidos: DataType.STRING
    }
        , {
            createdAt: false,
            updatedAt: false,
            hooks: {
                //Permite guardar el password con su hash en vez de texto plano
                afterValidate: function (user) {
                    user.password = bcrypt.hashSync(user.password, 8);
                }
            }
        });

    return User;
};
