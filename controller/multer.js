const multer = require("multer"); //是node的中间件, 处理表单数据 主要用于上传文件 
let fs = require('fs'); //fs模块：fs模块用于对系统文件及目录进行读写操作。

// 指定图片存储位置
module.exports= uploadImg = multer({
    storage: multer.diskStorage({
        //设置文件存储位置
        destination: function (req, file, cb) {
            let date = new Date();
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, '0');
            let day = date.getDate();
            let dir = "public/uploads/" + year + month + day;

            //判断目录是否存在，没有则创建
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {
                    recursive: true
                });
            }
            //dir就是上传文件存放的目录
            cb(null, dir);
        },
        //设置文件名称
        filename: function (req, file, cb) {
            let fileName = Date.now()+ utils.createFilename(16)+ path.extname(file.originalname);
            //fileName就是上传文件的文件名
            cb(null, fileName);
        }
    })
});