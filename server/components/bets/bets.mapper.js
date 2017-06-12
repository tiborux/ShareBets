class BetsMapper {

  outputAll(outputBets) {
    return outputBets.map(this.outputGet.bind(this));
  }

  outputGet(outputBet) {
    return  {
      id_usuario: outputBet.id_usuario,
      id_apuesta: outputBet.id_apuesta,
    };
  }

  outputGetUsersBets(outputBet) {
    const users = outputBet.map((bet) => bet.usuarios[0].usuario);
    return  {
      id_apuesta: outputBet[0].id_apuesta,
      usuarios: users,
    };
  }

  outputDelete(id) {
    return {
      deleted: id
    };
  }

/* inputUpdate(inputBet) {
    return  {
      id_usuario: inputBet.id_usuario,
      id_apuesta: inputBet.id_apuesta,
    };
  }
*/
  inputUpdate(inputBet) {
    console.log(inputBet);
    return  {
      titulo: inputBet.titulo,
      coste: inputBet.coste,
      beneficio: inputBet.beneficio,
      administrador: inputBet.administrador
    };
  }
}

module.exports = new BetsMapper();
