class UserService {
  constructor(db) {
    this.db = db.models['usuarios'];
  }

  getAll() {
    return this.db.usuarios.findAll();
  }

  get(username) {
    return this.db.usuarios.find({
      where: { username }
    });
  }

  create(model) {
    return this.db.usuarios.create(model);
  }

  update(username, model) {
    return this.db.usuarios.update(model, {
      where: { username }
    });
  }

  delete(username) {
    return this.db.usuariol.destroy({
      where: { username }
    });
  }
}

module.exports = (db) => new UserService(db);
