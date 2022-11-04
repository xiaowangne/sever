// 入口层

// 保存当前文件的绝对路径
global.__basename=__dirname;
// 导入path
global.path =require('path');

// 导入服务器基础配置
global.config=require(path.resolve(__basename,'config/config.js'))

const express=require('express');

// 导入body-parser模块
const bodyParser = require('body-parser');

// 导入路由层
let routes=require(path.resolve(__basename,'routes/routes.js'));

// 导入中间件
let middleWare=require(path.resolve(__basename,'middleWare/intercept.js'))

// 连接mysql,并且全局保存连接实例
global.sequelize=require(path.resolve(__basename,'db/connect.js'));

// 导入所有模型
global.model=require(path.resolve(__basename,'db/model/model.js'));

// 导入服务层service
global.api=require(path.resolve(__basename,'service/api.js'));

//导入utils
global.utils=require(path.resolve(__basename,'utils/utils.js'));
// 创建一个express实例
let app=express();

//解析post请求 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//解析 application/json
app.use(bodyParser.json())

//设置静态目录
// app.use( express.static(path.resolve(__basename, 'public')));
app.use('/public',express.static("public"));//将静态资源托管
app.use('/houtai',express.static("dist"));//将静态资源托管

//加载中间件层
middleWare(app);

// 加载路由接口
routes(app);


app.listen(config.serverOptions.port,()=>{
	console.log(`服务器搭建成功 ${config.serverOptions.host}:${config.serverOptions.port}` )
})