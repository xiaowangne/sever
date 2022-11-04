// 路由层

// 导入控制器层
let controller = require(path.resolve(__basename, 'controller/controller.js'));

module.exports = app => {
  // 注册
  app.post('/register', controller.register);

  // 发送邮箱验证码
  app.post('/sendEmail', controller.sendEmail);

  // 登录
  app.post('/login', controller.login);

  // 创建分类
  app.post('/createType', controller.createType);

  // 上传图片
  app.post('/upload', controller.upload);

  //获取分类列表
  app.get('/typeList', controller.findTypeList);

  // 切换类型状态
  app.post('/typeStatus', controller.toggleTypeStatus);

  //根据typeId查询类型数据
  app.get('/typeDataByTypeId', controller.findTypeByTypeId);

  //根据typeId编辑类型数据
  app.post('/editType', controller.editType);

  //移除类型数据
  app.post('/removeType', controller.removeType);

  //查询类型总数量
  app.get('/typeCount', controller.findTypeCount);

  //查询用户信息
  app.get('/userInfo', controller.findUserInfo);

  // 创建文章
  app.post('/createArticle', controller.createArticle);

  // 查询分类
  app.get('/typeData', controller.findTypeData);

  //获取文章列表
  app.get('/articleList', controller.findArticleList);

  //获取文章总数
  app.get('/articleCount', controller.findArticleCount);

  // 切换文章状态
  app.post('/articleStatus', controller.toggleArtStatus);

  //根据artId获取文章数据
  app.get('/articleDataByArtId', controller.findArticleByArtId);

  //根据artId编辑文章数据
  app.post('/editArticle', controller.editArticle);

  //移除文章
  app.post('/removeArticle', controller.removeArticle);

  // 创建分类
  app.post('/createBanType', controller.createBannerType);

  //获取banner分类列表
  app.get('/bannerType', controller.findBannerType);

  // 切换banner类型状态
  app.post('/banTypeStatus', controller.toggleBanTypeStatus);

  //根据typeId编辑banner类型数据
  app.post('/editBannerType', controller.editBannerType);

  //根据typeId获取banner类型数据
  app.get('/getBannerType', controller.findBanTypeByTypeId);

  // 创建banner
  app.post('/createBanner', controller.createBanner);

  //获取banner列表
  app.get('/bannerList', controller.findBannerList);

  // 切换banner状态
  app.post('/bannerStatus', controller.toggleBanStatus);

  // 查询banner总数
  app.get('/bannerCount', controller.findBannerCount);

  //根据typeId获取banner类型数据
  app.get('/bannerDataByBanId', controller.findBannerBybanId);

  //根据banId编辑banner数据
  app.post('/editBanner', controller.editBanner);

  //移除banner
  app.post('/removeBanner', controller.removeBanner);

  //获取分类
  app.get('/getArticleType', controller.getArticleType);
  //获取文章
  app.get('/getArticle', controller.getArticle);

  //获取文章
  app.get('/getArticleInfo', controller.getArticleInfo);

  // 获取轮播图
  app.get('/getBanner', controller.getBanner);

  // 搜索
  app.get('/search',controller.search)
}