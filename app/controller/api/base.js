const Controller = require('egg').Controller;

class BaseController extends Controller {
    get user() {
        return this.ctx.session.user;
    };
    /* 判断是否管理员 */
    async IsAuthAdmin() {
        if (this.ctx.session.populated && this.ctx.session.user != undefined) {
            if (this.ctx.session.user.authority == 1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        };
    }

    /* 判断是否登录 */
    async IsAuth() {
        if (this.ctx.session.populated && this.ctx.session.user != undefined) {
            return true;
        } else {
            this.Errors({ msg: '请登录!' })
            return false;
        };
    }

    /* api接口成功返回 */
    async Success({ data = [], msg = '操作成功' }) {
        this.ctx.status = '200';
        this.ctx.type =
            this.ctx.body = {
                code: 0,
                success: true,
                msg,
                data,
            };
    };

    /* api接口异常返回 */
    async Errors({ msg = '操作失败' }) {
        this.ctx.body = {
            success: false,
            code: 1,
            msg,
        };
    };

};



module.exports = BaseController;