module.exports = (app, db) => {
  const router = require('./user.router.js');
  const mapper = require('./user.mapper.js');
  const service = require('./user.service.js')(db);
  const controller = require('./user.controller.js')(service, mapper);

  app.use('/users', router(controller));
};
