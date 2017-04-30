class UserController {
  constructor(service, mapper) {
    this.service = service;
    this.mapper = mapper;
  }

  getAll(req, res) {
    return service.getAll()
    .then(this.mapper.outputAll.bind(this.mapper))
    .then(res.json.bind(res));
  }

  get(req, res) {
    return service.get(req.params.username)
    .then(this.mapper.outputGet.bind(this.mapper))
    .then(res.json.bind(res));
  }

  create(req, res) {
    return service.create(this.mapper.inputUpdate(req.body))
    .then(this.mapper.outputGet.bind(this.mapper, req.body))
    .then(res.json.bind(res));
  }

  update(req, res) {
    return service.update(req.params.username, this.mapper.inputUpdate(req.body))
    .then(this.mapper.outputGet.bind(this.mapper, req.body))
    .then(res.json.bind(res));
  }

  delete(req, res) {
    return service.delete(req.params.username)
    .then(this.mapper.outputDelete.bind(this.mapper, req.params.username))
    .then(res.json.bind(res));
  }
}

module.exports = (service, mapper) => new UserController(service, mapper);
