class UserService {
  constructor(db) {
    this.db = db.models['usuarios'];
  }

  getAll() {
    return this.db.findAll();
  }

  get(username) {
    return this.db.find({
      where: { usuario: username }
    });
  }

  create(model) {
    return this.db.create(model);
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

module.exports = (db) => new UserService(db);
