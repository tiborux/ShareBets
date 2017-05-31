module.exports = (sequelize, DataType) => {
  const Bets = sequelize.define('usuarios_apuestas', {
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
    updatedAt: false,
     classMethods: {
      associate: (models) => {
      Bets.hasMany(models['usuarios'], {
          foreignKey: 'id',
           sourceKey: 'id_usuario'
       });
      }
    },
    freezeTableName: true
  }
  );
  
  return Bets;
};
