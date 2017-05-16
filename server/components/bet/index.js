module.exports = (app, db, middlewares, config) => {
  const router = require('./bet.router.js');
  const mapper = require('./bet.mapper.js');
  const service = require('./bet.service.js')(db, config);
  const controller = require('./bet.controller.js')(service, mapper, middlewares);

  app.use('/bet', router(controller, middlewares));
};
