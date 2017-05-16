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

  outputDelete(id) {
    return {
      deleted: id
    };
  }

  inputUpdate(inputBet) {
    return  {
      id_usuario: inputBet.id_usuario,
      id_apuesta: inputBet.id_apuesta,
    };
  }
}

module.exports = new BetsMapper();
