class BetsController {
  constructor(service, mapper, middlewares) {
    this.service = service;
    this.mapper = mapper;
    this.middlewares = middlewares;
  }

  getAll(req, res) {
    return this.service.getAll()
      .then(this.mapper.outputAll.bind(this.mapper))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  getMe(req, res) {
    return this.service.getByUserId(req.user)
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  getHistory(req, res) {
    return this.service.getByUserId(req.user)
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  getUsers(req, res) {
    return this.service.getUsersBets(req.params.betId)
      .then(this.mapper.outputGetUsersBets.bind(this.mapper))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  createBet(req, res) {
    return this.service.create(this.mapper.inputUpdate(req.body), req.user)
      .then(this.mapper.outputGet.bind(this.mapper, req.body))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  updatePay(req, res) {
    return this.service.updatePago(req.body, req.user)
      .then(this.mapper.outputGet.bind(this.mapper, req.body))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  updateStatus(req, res) {
    return this.service.updateStatus(req.body, req.user)
      .then(this.mapper.outputGet.bind(this.mapper, req.body))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  endBet(req, res) {
    return this.service.endBet(req.body, req.user)
      .then(this.mapper.outputGet.bind(this.mapper, req.body))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
  updateBet(req, res) {
    return this.service.updateBet(req.body, req.user)
      .then(this.mapper.outputGet.bind(this.mapper, req.body))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  delete(req, res) {
    return this.service.delete(req.params.user_id)
      .then(this.mapper.outputDelete.bind(this.mapper, req.params.username))
      .then(res.json.bind(res)).catch(res.send.bind(res));
  }
}

module.exports = (service, mapper, middlewares) => new BetsController(service, mapper, middlewares);
