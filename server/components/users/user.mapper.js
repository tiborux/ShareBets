class UserMapper {
  outputAll(outputUsers) {
    return outputUsers.map(this.outputGet.bind(this));
  }

  outputGet(outputUser) {
    return  {
      id: outputUser.id,
      usuario: outputUser.usuario,
      email: outputUser.email,
      nombre: outputUser.nombre,
      apellidos: outputUser.apellidos,
      paypal: outputUser.paypal
    };
  }

  outputDelete(username) {
    return {
      deleted: username
    };
  }

  inputCreate(inputUser) {
    return  {
      usuario: inputUser.usuario,
      password: inputUser.password,
      email: inputUser.email,
      nombre: inputUser.nombre,
      apellidos: inputUser.apellidos,
      paypal: inputUser.paypal
    };
  }
   inputUpdate(inputUser) {
    return  {
      usuario: inputUser.usuario,
      email: inputUser.email,
      nombre: inputUser.nombre,
      apellidos: inputUser.apellidos,
      paypal: inputUser.paypal
    };
  }

}

module.exports = new UserMapper();
