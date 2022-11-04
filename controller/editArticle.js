const api = require("../service/api");
// 图片上传处理
let uploadImg = require(path.resolve(__basename, 'controller/multer.js'));
const AvatarUpload = uploadImg.array('file', 6);
// 表单处理
const formidable = require("formidable");
var from = new formidable.IncomingForm();
//根据typeId编辑类型数据
module.exports = (req, res) => {
    // res.send({
    //     msg: '修改分类数据成功',
    //     status: 1090
    // });
    let img = '';
    let img_more = [];
    AvatarUpload(req, res, err => {
        if (req.files.length > 0) {
            // req.files[0].path为上传文件数组中第一个文件的地址
            //将图片地址返回前端
            img = req.files[0].path;
            for (let i = 0; i < req.files.length; i++) {
                img_more.push(req.files[i].path)
            }
            // console.log('img_more1==>',img_more);
        }
    })
    from.parse(req, function (err, fields, files) {
        console.log(fields);
        let artId = fields.artId;
        let type=fields.type;
        delete fields.artId;
        delete fields.type;
        if(fields.file===''){
            fields['img'] = '';
            fields['imgMore'] = '';
        }
        delete fields.file;
        if (img_more.length != 0) {
            fields['img'] = img;
            fields['imgMore'] = String(img_more);
        }
        // console.log('fields==>',fields);
        api.updateData(type, fields, {
            artId,
            remove: 0
        }).then(result => {
            res.send({ msg: '编辑文章数据成功', status: 1200, data: result });
        }).catch(err => {
            console.log('err ==> ', err);
            res.send({ msg: '编辑文章数据失败', status:1201 });
        })
       
    })

}