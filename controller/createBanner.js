const api = require("../service/api");
// 图片上传处理
let uploadImg = require(path.resolve(__basename, 'controller/multer.js'));
const AvatarUpload = uploadImg.array('file', 6);
// 表单处理
const formidable = require("formidable");
var from = new formidable.IncomingForm();

// 创建类型
module.exports = (req, res) => {
  // 创建文章artId
  let banId = 'ban_' + new Date().getTime();
  
  let img = '';
  let img_more = [];
  AvatarUpload(req, res, err => {
      if (req.files.length>0) {
          // req.files[0].path为上传文件数组中第一个文件的地址
          //将图片地址返回前端
          img = req.files[0].path;
          for (let i = 0; i < req.files.length; i++) {
              img_more.push(req.files[i].path)
          }
          // console.log(img_more);
      }
  })
  from.parse(req, function (err, fields, files) {
      //fields 表示普通控件
      //files  表示文件控件
      let typeId=fields.typeId
      // 启动事务处理
      // console.log('img_more2==>',img_more);
      api.transactionData(async t => {
          //创建banner基础数据
          await api.createData('Banner', {
              banId,
              typeId,
              typeName:fields.typeName,
              title: fields.title,
              status: Number(fields.status),
              img,
              imgMore:String(img_more) ,
              description:fields.description,
              url:fields.url
          }, t)

            //将商品和类型写入文章、类型关系表
      //  await api.createData('ArticleType', {artId,typeId }, t);


        }).then(() => {
          res.send({msg: '创建成功', status: 1270});
        }).catch(err => {
          console.log('err ==> ', err);
          res.send({msg: '创建失败', status: 1271});
        })
  });

}