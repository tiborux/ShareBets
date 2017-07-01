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
        attributes: ['administrador', 'pagado','estado'],
        where: {
          id_usuario: userid
        }
      }]

    });
  }

  getUsersBets(betId) {
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

  create(model, userId) {
    return this.db.create(model)
      .then((apuesta) => {
        return this.tables.models.usuarios_apuestas.create({
          id_usuario: userId,
          id_apuesta: apuesta.get("id"),
          administrador: model.administrador,
          estado: 1
        })
      })
      .then((apuesta) => {
        for (let id of model.usuarios)
          this.tables.models.usuarios_apuestas.create({
            id_usuario: id,
            id_apuesta: apuesta.id_apuesta,
            administrador: 0,
            estado: 0
          })
      }
      )
  }
  updatePago(body, user) {
    return this.tables.models.usuarios_apuestas.update({ pagado: body.pago }, {
      where: {
        id_usuario: user,
        id_apuesta: body.id_apuesta
      }
    });
  }
   updateStatus(body, user) {
    return this.tables.models.usuarios_apuestas.update({ estado: body.estado }, {
      where: {
        id_usuario: user,
        id_apuesta: body.id_apuesta
      }
    });
  }
  updateBet(body, user) {
    return this.db.update({coste: body.coste,beneficio: body.beneficio, foto: body.foto }, {
      where: {
        id: body.id
      }
    });
  }
  endBet(body, user) {
   return this.tables.models.usuarios_apuestas.update({ estado: body.estado }, {
      where: {
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
