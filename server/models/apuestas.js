module.exports = (sequelize, Sequelize) => {
  const Bet = sequelize.define('apuestas', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titulo: {
      type: Sequelize.STRING
    },
     coste: Sequelize.INTEGER,
     beneficio: Sequelize.INTEGER,
     fecha_expires: Sequelize.DATE,
     fecha_apuesta: Sequelize.DATE,
     direccion_paypal: Sequelize.STRING,
  }, {
    updatedAt: false,
    classMethods: {
      associate: (models) => {
      Bet.belongsTo(models['usuarios_apuestas'], {
          foreignKey: 'id',
           targetKey: 'id_apuesta'
       });
      }
    },
    freezeTableName: true
  });

  return Bet;
};
