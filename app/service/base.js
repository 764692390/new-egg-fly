'use strict';
const Service = require('egg').Service;

class BaseService extends Service {
    /* 获取ip */
    async getIp() {
        let ip;
        if (this.ctx.header['x-forwarded-for'] === undefined && this.ctx.header['x-real-ip'] === undefined) {
            ip = '127.0.0.1'
        } else {
            ip = await this.ctx.header['x-forwarded-for'].split(',')[0] || this.ctx.header['x-real-ip'];
        }
        let res = await this.ctx.curl(`http://int.dpool.sina.com.cn/iplookup/iplookup.php`, {
            data: {
                format: 'json',
                ip: ip
            },
            dataType: 'json',
        });

        let json = {};
        if (res.data != -2) {
            json = {
                ip: ip,
                city: res.data.city,
                country: res.data.country
            };
        } else {
            json = {
                ip: "127.0.0.1",
                city: "本地",
                country: "本地"
            };
        }
        return json;
    }

}

module.exports = BaseService;