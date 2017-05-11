class LoginMapper {
  outputLogout() {
    return {
      logout: true
    };
  }

  outputToken(token) {
    return { token };
  }

  inputUser(inputUser) {
    return  {
      usuario: inputUser.usuario,
      password: inputUser.password
    };
  }
}

module.exports = new LoginMapper();
