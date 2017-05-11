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

  getByUserPassword(model) {
    return bcrypt.compare(this.config.env.HASH, model.password)
    .then((hash) => {
      return this.db.find({
        where: {
          usuario: model.usuario,
          password: hash
        }
      });
    });
  }

  create(model) {
    return bcrypt.hash(this.config.env.HASH, this.config.env.SALT)
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

  delete(username) {
    return this.db.destroy({
      where: { usuario: username }
    });
  }
}

module.exports = (db, config) => new UserService(db, config);
