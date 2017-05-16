var bcrypt = require('bcrypt');

class BetsService {
  constructor(db, config) {
    this.db = db.models['apuestas'];
    this.config = config;
  }

  getAll() {
     return this.db.findAll();
  }

  getAllByUserId(userid) {
    return this.db.findAll({
      where: { id_usuario: userid}
    });
  }

  create(model) {
      return this.db.create(model);
  }

  delete(id) {
    return this.db.destroy({
      where: { id: id }
    });
  }
}

module.exports = (db, config) => new BetsService(db, config);
