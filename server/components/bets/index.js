module.exports = (app, db, middlewares, config) => {
  const router = require('./bets.router.js');
  const mapper = require('./bets.mapper.js');
  const service = require('./bets.service.js')(db, config);
  const controller = require('./bets.controller.js')(service, mapper, middlewares);

  app.use('/bets', router(controller, middlewares));

};
