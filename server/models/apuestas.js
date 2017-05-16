module.exports = (sequelize, DataType) => {
  const Bets = sequelize.define('apuestas', {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_usuario: 
    {
      type: DataType.INTEGER
    },
     id_apuesta: 
     {
      type: DataType.INTEGER
     }
  },
  {
    createdAt: false,
    updatedAt: false
  });

  return Bets;
};
