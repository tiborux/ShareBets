var bcrypt = require('bcrypt');

class BetsService {
  constructor(db, config) {
    this.db = db.models['apuestas'];
    this.config = config;
    this.tables = db;
  }

  getAll() {
    return this.db.findAll();
  }

  getByUserId(userid) {
    console.log(this.tables.models.usuarios_apuestas);
    return this.db.findAll({
      include: [{
        model: this.tables.models.usuarios_apuestas,
        attributes: [],
        where: {
          id_usuario: userid
        }
      }]

    });
  }

  getUsersBets(betId) {
    console.log(this.tables.models.usuarios_apuestas);
    return this.tables.models.usuarios_apuestas.findAll({
      where: {
        id_apuesta: betId
      },
      include: [{
        model: this.tables.models.usuarios,
        attributes: ['usuario'],
      }],
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
