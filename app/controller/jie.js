'use strict';

const Controller = require('egg').Controller;

class JieController extends Controller {
  /* 首页 */
  async index() {
    // this.ctx.session.user={'lizhi':'admin'};
    //let data = this.ctx.app.config.lay;
    //this.ctx.helper.resSuccess({ctx:this.ctx,data});
    await this.ctx.render('jie/index.tpl');
  }
}

module.exports = JieController;
