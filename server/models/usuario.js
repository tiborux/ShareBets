const bcrypt = require('bcryptjs');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('usuarios', {
    usuario: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      },
      unique: true
    },
    nombre: {
      type: Sequelize.STRING
    },
    apellidos: Sequelize.STRING
  }, {
    createdAt: false,
    updatedAt: false,
    hooks: {
      afterValidate: (user) => {
        user.password = bcrypt.hashSync(user.password, 8);
      }
    }
  });

  return User;
};
