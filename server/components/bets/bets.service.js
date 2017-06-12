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
    return this.db.findAll({
      include: [{
        model: this.tables.models.usuarios_apuestas,
        attributes: ['administrador','pagado'],
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

  create(model,userId) {
    return this.db.create(model)
    .then((apuesta) => {
      console.log(model);
        return this.tables.models.usuarios_apuestas.create({
           id_usuario: userId,
           id_apuesta: apuesta.get("id"),
           administrador: model.administrador
       })
    })  
  }
  updatePago(body,user) {
    return this.tables.models.usuarios_apuestas.update({pagado: body.pago}, {
          where: { 
            id_usuario: user,
            id_apuesta: body.id_apuesta
          }
        });
  }
  delete(id) {
    return this.db.destroy({
      where: { id: id }
    });
  }
}

module.exports = (db, config) => new BetsService(db, config);
