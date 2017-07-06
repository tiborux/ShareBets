const Router = require('express').Router;

module.exports = (controller, middlewares) => {
  const router = new Router();

  router.get('/', middlewares.jwt.isAuthed, controller.getAll.bind(controller));
  router.get('/me',middlewares.jwt.isAuthed, controller.getMe.bind(controller));
  router.get('/:username', middlewares.jwt.isAuthed, controller.getByUsername.bind(controller));
  
  router.post('/', controller.create.bind(controller));
  router.put('/:username', middlewares.jwt.isAuthed, controller.update.bind(controller));
  router.delete('/:username', middlewares.jwt.isAuthed, controller.delete.bind(controller));

  return router;
};
