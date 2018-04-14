'use strict';
const path = require('path');

module.exports = appInfo => {
  let config ={
    /* 域名配置 */
    BaseUrl:{
      "CDN": "http://bbs.jczxw.cn/public",
      "HOST": "http://bbs.jczxw.cn"
    },

    /* favicon设置 */
    siteFile:{
      '/favicon.ico': '/public/images/favicon.ico',
    },

    /* lay信息 */
    lay:{
      version: "2.3.3",
      timer: new Date().getTime(),
      base: {
          keywords: "Egg中文社区,nodejs, node, express,egg,koa2,ThinkJS, socket.io,关注Web前端开发技术",
          description: "Egg中文社区,nodejs, node, express,egg,koa2,ThinkJS, socket.io",
          title: "Egg中文社区",
      }
    },

    /* 添加 view 配置 */
    view:{
      defaultViewEngine: 'nunjucks',
      mapping: {
          '.tpl': 'nunjucks',
      },
    },

    /* egg-sequelize */
    sequelize:{
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'egg',
      host: '127.0.0.1',
      port: '3306',
      username: 'root',
      password: 'root',
      timezone: '+08:00' //东八时区
    },

    /* Redis */
    redis:{
      client: {
          host: "127.0.0.1", //安装好的redis服务器地址
          port: 6379, //端口
          password:'123456',    
          db: 0
      },
    },

    /*QQ互联*/
    qq:{
      client_id:'101459467',
      redirect_uri:'https://bbs.jczxw.cn/loginCallBack',
      client_secret:'fb76143eab136ad500a4b2daa80ac477',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1522484925665_2587';

  // 自定义中间价
  config.middleware = ['saveSession', 'imgCode'];

  return config;
};
