class BetMapper {

  outputAll(outputBets) {
    return outputBets.map(this.outputGet.bind(this));
  }

  outputGet(outputBet) {
    return  {
      titulo: outputBet.titulo,
      coste: outputBet.coste,
    };
  }

  outputDelete(bettitle) {
    return {
      deleted: bettitle
    };
  }

  inputUpdate(inputBet) {
    return  {
      titulo: inputUser.titulo,
      coste: inputUser.coste,

    };
  }
}

module.exports = new BetMapper();
