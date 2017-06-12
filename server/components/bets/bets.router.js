const Router = require('express').Router;

module.exports = (controller, middlewares) => {
  const router = new Router();

  router.get('/', middlewares.jwt.isAuthed, controller.getAll.bind(controller));
  router.get('/me', middlewares.jwt.isAuthed, controller.getMe.bind(controller));
  router.get('/users/:betId', middlewares.jwt.isAuthed, controller.getUsers.bind(controller));
  router.post('/new', middlewares.jwt.isAuthed,controller.createBet.bind(controller));
  router.get('/history', middlewares.jwt.isAuthed,controller.getHistory.bind(controller));
  router.delete('/:id', middlewares.jwt.isAuthed, controller.delete.bind(controller));
  router.put('/pay', middlewares.jwt.isAuthed, controller.updatePay.bind(controller));
  return router;
};
