const Router = require('express').Router;

module.exports = (app, db, middlewares, config) => {

  const mapper = require('./login.mapper.js');
  const service = require('../users/user.service.js')(db, config);
  
  const controller = require('./login.controller.js')(service, mapper, middlewares);

  const router = new Router();

  router.post('/login', controller.login.bind(controller));
  router.post('/logout', controller.logout.bind(controller));
  router.post('/reset', controller.reset.bind(controller));
  router.get('/reset/:token', controller.getToken.bind(controller));
  router.put('/reset/:token', controller.updatePassword.bind(controller));
  app.use(router);
};
