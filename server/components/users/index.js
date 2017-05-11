module.exports = (app, db, middlewares, config) => {
  const router = require('./user.router.js');
  const mapper = require('./user.mapper.js');
  const service = require('./user.service.js')(db, config);
  const controller = require('./user.controller.js')(service, mapper, middlewares);

  app.use('/users', router(controller, middlewares));
};
