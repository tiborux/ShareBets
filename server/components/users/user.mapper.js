class UserMapper {
  outputAll(outputUsers) {
    return outputUsers.map(this.outputGet.bind(this));
  }

  outputGet(outputUser) {
    return  {
      usuario: outputUser.usuario,
      email: outputUser.email,
      nombre: outputUser.nombre,
      apellidos: outputUser.apellidos
    };
  }

  outputDelete(username) {
    return {
      deleted: username
    };
  }

  inputUpdate(inputUser) {
    return  {
      usuario: inputUser.usuario,
      password: inputUser.password,
      email: inputUser.email,
      nombre: inputUser.nombre,
      apellidos: inputUser.apellidos
    };
  }
}


module.exports = new UserMapper();
