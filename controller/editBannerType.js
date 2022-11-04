const api = require("../service/api");

// 表单处理
const formidable = require("formidable");
var from = new formidable.IncomingForm();

//根据typeId编辑类型数据
module.exports = (req, res) => {
  
    from.parse(req, function (err, fields, files) {
        let typeId = fields.typeId;
        delete fields.typeId;
        api.updateData('BannerType', fields, {
            typeId,
            remove: 0
        }).then(result => {
            res.send({ msg: '编辑类型数据成功', status: 1250, data: result });
        }).catch(err => {
            console.log('err ==> ', err);
            res.send({ msg: '编辑类型数据失败', status: 1251 });
        })
       
    })

}