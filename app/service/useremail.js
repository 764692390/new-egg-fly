'use strict';
const Service = require('egg').Service;

class UseremailService extends Service {
    /*登录*/
    async login(email, pass) {
        let password = this.ctx.helper.Md5(pass);
        let finduser = await this.model.useremail.findOneUser(email);
        if (finduser == null) {
            return { "success": false, "msg": "用户名不存在！" };
        } else {
            if (finduser.dataValues.password != password) {
                return { "success": false, "msg": "密码不对！" };
            } else {
                this.ctx.session.user = finduser.dataValues;
                return { "success": true, "msg": "登录成功！" };
            }
        }
    };

    /* email注册 */
    async reg(email, username, pass) {
        const { model, app, helper, service } = this.ctx;
        let ips = await service.base.getIp();
        let ip = ips.ip;
        let city = ips.city;
        let password = await helper.Md5(pass);
        let uid = await helper.uid();
        let finduser = await model.UserEmail.findOneUserEmail(email);
        let n = await helper.Random(0, 11);
        let pic = app.config.BaseUrl.CDN + '/images/avatar/' + n + '.jpg'; //系统默认图像

        if (finduser == null) {
            let data = await model.UserEmail.addUserEmail(email, uid, username, password, ip, city, pic); // 插入user_email表;
            return data;
        } else {
            return false;
        };
    };
};

module.exports = UseremailService;
