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
     },
     administrador:
     {
       type: DataType.BOOLEAN
     },
     pagado:
     {
       type: DataType.BOOLEAN
     },
      estado:
     {
       type: DataType.INTEGER
     },
      beneficio:
     {
       type: DataType.BOOLEAN
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
