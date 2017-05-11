class LoginController {
  constructor(service, mapper, middlewares) {
    this.service = service;
    this.mapper = mapper;
    this.middlewares = middlewares;
  }

  login(req, res) {
    return this.service.getByUserPassword(this.mapper.inputUser(req.body))
    .then(this.middlewares.jwt.createToken.bind(this.middlewares.jwt))
    .then(this.mapper.outputToken.bind(this.mapper))
    .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  logout(req, res) {
    return res.json(this.mapper.outputLogout());
  }
}

module.exports = (service, mapper, middlewares) => new LoginController(service, mapper, middlewares);
