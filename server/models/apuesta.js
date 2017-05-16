module.exports = (sequelize, Sequelize) => {
  const Bet = sequelize.define('apuesta', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titulo: {
      type: Sequelize.STRING
    },
     coste: Sequelize.STRING
  }, {
    createdAt: false,
    updatedAt: false
  });

  return Bet;
};
