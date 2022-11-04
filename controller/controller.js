// 控制器层

// 收编控制器
let register = require(path.resolve(__basename, 'controller/register.js'));
let sendEmail = require(path.resolve(__basename, 'controller/sendEmail.js'));
let login = require(path.resolve(__basename, 'controller/login.js'));
let createType = require(path.resolve(__basename, 'controller/createType.js'));
let upload = require(path.resolve(__basename, 'controller/upload.js'));
let uploadImg = require(path.resolve(__basename, 'controller/multer.js'));
let findTypeList = require(path.resolve(__basename, 'controller/findTypeList.js'))
let toggleTypeStatus = require(path.resolve(__basename, 'controller/toggleTypeStatus.js'))
let findTypeByTypeId = require(path.resolve(__basename, 'controller/findTypeByTypeId.js'));
let editType = require(path.resolve(__basename, 'controller/editType.js'));
let removeType = require(path.resolve(__basename, 'controller/removeType.js'));
let findTypeCount = require(path.resolve(__basename, 'controller/findTypeCount.js'));
let findUserInfo = require(path.resolve(__basename, 'controller/findUserInfo.js'));
let createArticle = require(path.resolve(__basename, 'controller/createArticle.js'));
let findTypeData = require(path.resolve(__basename, 'controller/findTypeData.js'));
let findArticleList = require(path.resolve(__basename, 'controller/findArticleList.js'));
let findArticleCount = require(path.resolve(__basename, 'controller/findArticleCount.js'));
let toggleArtStatus = require(path.resolve(__basename, 'controller/toggleArtStatus.js'));
let findArticleByArtId = require(path.resolve(__basename, 'controller/findArticleByArtId.js'));
let editArticle = require(path.resolve(__basename, 'controller/editArticle.js'));
let removeArticle = require(path.resolve(__basename, 'controller/removeArticle.js'));
let createBannerType = require(path.resolve(__basename, 'controller/createBannerType.js'));
let findBannerType= require(path.resolve(__basename, 'controller/findBannerType.js'));
let toggleBanTypeStatus=require(path.resolve(__basename, 'controller/toggleBanTypeStatus.js'));
let editBannerType=require(path.resolve(__basename, 'controller/editBannerType.js'));
let findBanTypeByTypeId=require(path.resolve(__basename, 'controller/findBanTypeByTypeId.js'));
let createBanner=require(path.resolve(__basename, 'controller/createBanner.js'));
let findBannerList=require(path.resolve(__basename, 'controller/findBannerList.js'));
let toggleBanStatus=require(path.resolve(__basename, 'controller/toggleBanStatus.js'));
let findBannerCount=require(path.resolve(__basename, 'controller/findBannerCount.js'));
let findBannerBybanId=require(path.resolve(__basename, 'controller/findBannerBybanId.js'));
let editBanner=require(path.resolve(__basename, 'controller/editBanner.js'));
let removeBanner=require(path.resolve(__basename, 'controller/removeBanner.js'));
let getArticleType=require(path.resolve(__basename, 'controller/getArticleType.js'));
let getArticle=require(path.resolve(__basename, 'controller/getArticle.js'));
let getArticleInfo=require(path.resolve(__basename, 'controller/getArticleInfo.js'));
let getBanner=require(path.resolve(__basename, 'controller/getBanner.js'));
let search=require(path.resolve(__basename, 'controller/search.js'));
module.exports = {
    // 测试
    register,
    // 发送邮件验证码
    sendEmail,
    // 登录
    login,
    // 创建分类
    createType,
    // 上传图片
    upload,
    uploadImg,
    // 查询类型列表数据
    findTypeList,
    // 切换类型状态
    toggleTypeStatus,
    // 根据typeId查询类型数据
    findTypeByTypeId,
    // 根据typeId编辑类型数据
    editType,
    //移除商品类型
    removeType,
    // 查询分类总数
    findTypeCount,
    // 查询用户信息
    findUserInfo,
    //创建文章
    createArticle,
    //查询分类
    findTypeData,
    //查询文章列表
    findArticleList,
    // 查询文章总数
    findArticleCount,
    //切换文章状态
    toggleArtStatus,
    //根据文章id编辑文章
    findArticleByArtId,
    // 根据artId编辑文章数据
    editArticle,
    //移除文章
    removeArticle,
    //创建banner分类
    createBannerType,
    //查询banner分类
    findBannerType,
     //切换banner分类状态
     toggleBanTypeStatus,
    //  编辑Banner分类
    editBannerType,
    // 根据typeId查询banner类型数据
    findBanTypeByTypeId,
    //创建banner数据
    createBanner,
    //查询banner数据
    findBannerList,
    //切换banner状态
    toggleBanStatus,
    // 查询banner总数
    findBannerCount,
    // 根据banId获取banner数据
    findBannerBybanId,
     // 根据banI编辑banner数据
    editBanner,
    // 根据banI删除banner数据
    removeBanner,
    //获取分类数据
    getArticleType,
    // 获取文章列表
    getArticle,
    //获取文章详情
    getArticleInfo,
    // 获取轮播图
    getBanner,
    //搜索
    search
}