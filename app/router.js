'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);

  router.get('/jie/page/:page', controller.jie.index);
  // router.get('/jie/add', controller.jie.add);
  // router.get('/jie/detail', controller.jie.detail);

  router.get('/user/reg', controller.user.reg);//注册页面
  router.post('/user/reg', controller.api.user.reg);//注册接口
  router.get('/user/login', controller.user.login);//登录页面
  router.post('/user/login', controller.api.user.login);//登录接口
  
};
