'use strict'; 
const BaseController = require('./base');
const validator = require('validator.tool');

class UserController extends BaseController {

  /* email注册接口 */
  async reg() {
    let v = new validator();
    let email = this.ctx.request.body.email; 
    let username = this.ctx.request.body.username; 
    let pass = this.ctx.request.body.pass; 
    let repass = this.ctx.request.body.repass; 
    let vercode = this.ctx.request.body.vercode; 

    if (pass != repass) {
      this.ctx.helper.resError( {ctx:this.ctx, msg:'两次密码不一致'}); 
    }else if (this.ctx.session.code != vercode) {
      this.ctx.helper.resError( {ctx:this.ctx, msg:'验证码有误'}); 
    }else if (!v.isEmail(email)){
      this.ctx.helper.resError( {ctx:this.ctx, msg:'邮箱格式不正确'}); 
    }else if (
        typeof email != 'undefined' && 
        typeof username != 'undefined' && 
        typeof  pass != 'undefined' && 
        typeof  repass != 'undefined') {
      let res = await this.service.useremail.reg(email, username, pass); ; 
      if (res) {
        this.ctx.helper.resSuccess( {ctx:this.ctx, msg:'注册成功'}); 
        
      }else {
        this.ctx.helper.resError( {ctx:this.ctx, msg:'用户名已存在'}); 
      }
    }else {
      this.ctx.helper.resError( {ctx:this.ctx, msg:'缺少必填项'}); 
    }; 
  }
 

  /* email登录login接口 */
  async login() {
    await this.ctx.render('user/login.tpl'); 
  }
}

module.exports = UserController; 

