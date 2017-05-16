var bcrypt = require('bcrypt');

class BetService {
  constructor(db, config) {
    this.db = db.models['apuesta'];
    this.config = config;
  }

  getAll() {
    return this.db.findAll();
  }

  getById(betId) {
    return this.db.find({
      where: { id: betId }
    });
  }

  create(model) {
      return this.db.create(model);
  }

  delete(betId) {
    return this.db.destroy({
      where: { id: betId }
    });
  }
}

module.exports = (db, config) => new BetService(db, config);
