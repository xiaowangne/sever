const api = require("../service/api");
// 表单处理
const formidable = require("formidable");
var from = new formidable.IncomingForm();

// 创建类型
module.exports = (req, res) => {
  // 创建分类类型typeId
  let typeId = 't_' + new Date().getTime();
  from.parse(req, function (err, fields, files) {
    //fields 表示普通控件
    //files  表示文件控件
    api.createData('BannerType', {
      typeId,
      title: fields.title,
      status: Number(fields.status),
      description: fields.description
    }).then(() => {
      res.send({ msg: '创建类型成功', status: 1220 });
    }).catch(err => {
      console.log('err ==> ', err);
      res.send({ msg: '创建类型失败', status: 1221 });
    })
  });

}