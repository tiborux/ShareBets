const Router = require('express').Router;

module.exports = (controller) => {
  const router = new Router();

  router.get('/', controller.getAll.bind(controller));
  router.get('/:username', controller.get.bind(controller));
  router.post('/', controller.create.bind(controller));
  router.put('/:username', controller.update.bind(controller));
  router.delete('/:username', controller.delete.bind(controller));

  return router;
};
