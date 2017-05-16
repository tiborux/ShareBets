const Router = require('express').Router;

module.exports = (controller, middlewares) => {
  const router = new Router();

  router.get('/', middlewares.jwt.isAuthed, controller.getAll.bind(controller));
  router.get('/:id', middlewares.jwt.isAuthed, controller.getById.bind(controller));
  router.post('/', controller.create.bind(controller));
  router.delete('/:bettitle', middlewares.jwt.isAuthed, controller.delete.bind(controller));

  return router;
};
