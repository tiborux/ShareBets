const Router = require('express').Router;

module.exports = (controller, middlewares) => {
  const router = new Router();

  router.get('/', middlewares.jwt.isAuthed, controller.getAll.bind(controller));
  router.get('/me', middlewares.jwt.isAuthed, controller.getMe.bind(controller));
  router.get('/users/:betId', middlewares.jwt.isAuthed, controller.getUsers.bind(controller));
  router.post('/new', middlewares.jwt.isAuthed,controller.createBet.bind(controller));
  router.get('/history', middlewares.jwt.isAuthed,controller.getHistory.bind(controller));
  router.get('/bet/:id', middlewares.jwt.isAuthed,controller.getBet.bind(controller));
  router.get('/earnings/:id_bet/:id_usuario', middlewares.jwt.isAuthed,controller.getEarnings.bind(controller));
  router.delete('/:id', middlewares.jwt.isAuthed, controller.delete.bind(controller));
  router.post('/notjoin/:id', middlewares.jwt.isAuthed, controller.deleteApuesta.bind(controller));
  router.put('/status', middlewares.jwt.isAuthed, controller.updateStatus.bind(controller));
  router.put('/end', middlewares.jwt.isAuthed, controller.endBet.bind(controller));
  router.put('/pay', middlewares.jwt.isAuthed, controller.updatePay.bind(controller));
  router.put('/earnings', middlewares.jwt.isAuthed, controller.updateEarnings.bind(controller));
  router.put('/', middlewares.jwt.isAuthed, controller.updateBet.bind(controller));
  return router;
};
