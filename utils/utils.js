// 工具层 工具库（公共方法）

// 导入crypto加密模块(核心模块)
const crypto = require('crypto');

//导入jsonwebtoken模块签名token
const jsonwebtoken = require('jsonwebtoken');

//导入文件系统模块(核心模块)
const fs = require('fs');

//导入uuid模块
const uuid = require('uuid');

// 导入邮件模块
const nodemailer = require("nodemailer");
// 创建邮件对象
let transporter = nodemailer.createTransport({
  host: config.emailOptions.host,
  port: config.emailOptions.port,
  secure: config.emailOptions.secure,
  auth: {
    user: config.emailOptions.user,
    pass: config.emailOptions.pass
  }
})



class Utils {

  // 加密字符串
  encodeString(value) {
    //value 被加密字符串

    // 创建md5加密方式
    let md5 = crypto.createHash('md5');

    // 加密字符串
    let encode = md5.update(`${config.saltOptions.password}${value}`);

    //以hex(十六进制)输出，十六进制不能超过f，有效范围0-f

    return encode.digest('hex'); //输出32位加密字符串
  }

  // 发邮件验证码
  sendEmailCode(options) {

    return new Promise((resolve, rejects) => {
      transporter.sendMail(options, (err, info) => {
        //邮件发送失败
        if (err) {
          rejects(err)
        } else {
          resolve(info)
        }
      })
    })
  }

  // 随机生成数字验证码
  createValidcode(n) {
    let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let codes = [];
    for (let i = 0; i < n; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      codes.push(chars[randomIndex])
    }

    return codes.join('');
  }

  // 生成上传文件名
  createFilename(n) {
    let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"a","b","c","d","e","f"];
    let codes = [];
    for (let i = 0; i < n; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      codes.push(chars[randomIndex])
    }

    return codes.join('');
  }


  //签名token
  signToken(value) {
    //value: 签名的字符串, string
    return jsonwebtoken.sign({
      data: value,
    }, config.saltOptions.token, {
      expiresIn: config.tokenOptions.expires
    });
  }

  //解析token
  verifyToken(token) {
    return new Promise((resolve, reject) => {
      jsonwebtoken.verify(token, config.saltOptions.token, (err, decoded) => {
        if (err) {
          //token解析失败
          reject(err);
        } else {
          //token解析成功
          resolve(decoded);
        }
      });
    })
  }

  //将cookie转换成普通对象
  transformCookie(cookie) {
    let cookies = cookie.split('; ');
    if (cookies.length == 0) {
      return null;
    }
    let cookieObject = {};
    cookies.forEach(v => {
      let c = v.split('=');
      cookieObject[c[0]] = c[1];
    })

    return cookieObject;
  }
//随机在数组获取一个元素
getRandomElement(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
  
}

module.exports = new Utils();