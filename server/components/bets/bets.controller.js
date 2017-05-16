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

  getAllByUserId(req, res) {
    return this.service.getAllByUserId(req.params.id)
    .then(this.mapper.outputAll.bind(this.mapper))
    .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  create(req, res) {
    return this.service.create(this.mapper.inputUpdate(req.body))
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
