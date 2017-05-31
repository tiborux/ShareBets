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
     beneficio: Sequelize.INTEGER
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
