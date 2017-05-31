class UserController {
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

  getByUsername(req, res) {
    return this.service.getByUsername(req.params.username)
    .then(this.mapper.outputGet.bind(this.mapper))
    .then(res.json.bind(res)).catch(res.send.bind(res));
  }
    getMe(req, res) {
    return this.service.getById(req.user)
    .then(this.mapper.outputGet.bind(this.mapper))
    .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  create(req, res) {
    return this.service.create(this.mapper.inputCreate(req.body))
    .then(this.mapper.outputGet.bind(this.mapper, req.body))
    .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  update(req, res) {
    return this.service.update(req.params.username, this.mapper.inputUpdate(req.body))
    .then(this.mapper.outputGet.bind(this.mapper, req.body))
    .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  delete(req, res) {
    return this.service.delete(req.params.username)
    .then(this.mapper.outputDelete.bind(this.mapper, req.params.username))
    .then(res.json.bind(res)).catch(res.send.bind(res));
  }
}

module.exports = (service, mapper, middlewares) => new UserController(service, mapper, middlewares);
