var bcrypt = require('bcrypt');

class UserService {
  constructor(db, config) {
    this.db = db.models['usuarios'];
    this.config = config;
  }

  getAll() {
    return this.db.findAll();
  }

  getByUsername(username) {
    return this.db.find({
      where: { usuario: username }
    });
  }
  getByToken(token) {
    return this.db.find({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() + 7200000 }
      }
    });
  }
  getByEmail(correo) {
    return this.db.find({
      where: { email: correo }
    });
  }

  getById(id) {
    return this.db.findById(id);
  }

  getByUserPassword(model) {
    return this.db.find({
      where: {
        usuario: model.usuario,
      }
    })
      .then((usuario) => {
        if (usuario) {
          return bcrypt.compare(model.password, usuario.password).then((res) => {
            if (res == true) {
              return usuario;
            }
          });
        }
      });
  }

  create(model) {
    return bcrypt.hash(model.password, this.config.env.SALT)
      .then((hash) => {
        model.password = hash;
        return this.db.create(model);
      });
  }

  update(username, model) {
    return this.db.update(model, {
      where: { usuario: username }
    });
  }
  resetPassword(correo, token, expires) {
    return this.db.update({ resetPasswordToken: token, resetPasswordExpires: expires }, {
      where: { email: correo }
    });
  }
  updatePassword(token, password) {
    return bcrypt.hash(password, this.config.env.SALT)
      .then((hash) => {
        password = hash;
        return this.db.update({ password: password, resetPasswordToken: null, resetPasswordExpires: null }, {
          where: { resetPasswordToken: token }
        });
      });
  }

  delete(username) {
    return this.db.destroy({
      where: { usuario: username }
    });
  }
}

module.exports = (db, config) => new UserService(db, config);
