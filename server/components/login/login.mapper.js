class LoginMapper {
  outputLogout() {
    return {
      logout: true
    };
  }

  outputToken(token) {
    return { token };
  }

  outputEmail(outputEmail){
   if(outputEmail.email){
        return {
            email: outputEmail.email
        };
    }else{
        throw new Error("No email found!");
    }
  }

  inputUser(inputUser) {
    return  {
      usuario: inputUser.usuario,
      password: inputUser.password
    };
  }

}

module.exports = new LoginMapper();
