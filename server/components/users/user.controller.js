class UserController {
  constructor(service, mapper) {
    this.service = service;
    this.mapper = mapper;
  }

  getAll(req, res) {
    return this.service.getAll()
    .then(this.mapper.outputAll.bind(this.mapper))
    .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  get(req, res) {
    return this.service.get(req.params.username)
    .then(this.mapper.outputGet.bind(this.mapper))
    .then(res.json.bind(res)).catch(res.send.bind(res));
  }

  create(req, res) {
    return this.service.create(this.mapper.inputUpdate(req.body))
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
  emailLogin(req, res) {  
    User.findOne({email: req.body.email.toLowerCase()}, function(err, user) {
        // Comprobar si hay errores
        // Si el usuario existe o no
        // Y si la contraseña es correcta
        return res
            .status(200)
            .send({token: service.createToken(user)});
    })
  }
  
}

module.exports = (service, mapper) => new UserController(service, mapper);
