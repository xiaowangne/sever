// 配置层
// 根据node运行环境加载配置文件
module.exports=require(path.resolve(__basename,`config/config.prod.js`))
