'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  /* 注册 */
  async reg() {
    await this.ctx.render('user/reg.tpl');
  }


  /* 登录login */
  async login() {
    await this.ctx.render('user/login.tpl');
  }


}

module.exports = UserController;

