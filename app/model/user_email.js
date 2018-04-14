/**
 * 本站注册email；
 *  email：用户名
 *  username: 用户昵称
 *  pass: 用户密码
 *  ip: 注册ip
 *  city: 城市地址
 *  pic: 用户头像
 */

'use strict';
module.exports = (app) => {
  const {STRING, INTEGER, DATE} = app.Sequelize;

  const UserEmail = app.model.define('user_email', {
      email: STRING,
      uid:STRING,
      username: STRING(30),
      pass: STRING(32),
      ip:STRING,
      city:STRING,
      pic: STRING,
  }, {
      /* 如果为 true 则表的名称和 model 相同，即 user */
      /* 为 false MySQL 创建的表名称会是复数 users */
      /* 如果指定的表名称本就是复数形式则不变 */
      freezeTableName: true
  });

  /* 创建表 */
  /* User.sync() 会创建表并且返回一个 Promise 对象 */
  /* 如果 force = true 则会把存在的表（如果 users 表已存在）先销毁再创建表 */
  /* 默认情况下 forse = false */
  let userEmail = UserEmail.sync({force: false});

  /* 添加用户Email */
  UserEmail.addUserEmail= function (email,uid,username, pass,ip,city,pic) {
      return app.model.UserEmail.create({
        email,
        uid,
        username,
        pass,
        ip,
        city,
        pic
      });
  };

  /* 查找用户用户 */
  UserEmail.findOneUserEmail = function (email) {
      return app.model.UserEmail.findOne({"where": {"email": email}});
  }


  //修改回帖次数
//   User.updataReply = function(id,n){
//       return app.model.User.update({'reply':n},{
//           where:{
//                'id':id
//           },
//       });
//   }

  //获取回帖次数
//   User.findReply = function(id){
//       return app.model.User.findOne({"where":{'id':id}});
//   }

  //回帖排行榜
    //   User.hotReply = function(index){
    //       let indexs = (index - 1) * 20;
    //       let rows = 20;
    //       return app.model.User.findAndCountAll({
    //            order: [
    //               ['reply', 'DESC']
    //           ],
    //            limit: rows,
    //            offset: indexs
    //       });
    //   }


  return UserEmail;
};
