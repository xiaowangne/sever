// 模型层

// 收边所有模型

// 导入User模型
const User=require(path.resolve(__basename,'db/model/user.js'));

// 导入Code模型
const Code=require(path.resolve(__basename,'db/model/code.js'));

// 导入文章articleType模型
const ArticleType=require(path.resolve(__basename,'db/model/articleType.js'));

// 导入文章产品productType模型
const ProductType=require(path.resolve(__basename,'db/model/productType.js'));

// 导入UserType模型
const UserType=require(path.resolve(__basename,'db/model/userType.js'));

// 导入Article模型
const Article=require(path.resolve(__basename,'db/model/article.js'));

// 导入BannerType模型
const BannerType=require(path.resolve(__basename,'db/model/bannerType.js'));

// 导入Banner模型
const Banner=require(path.resolve(__basename,'db/model/banner.js'));

// 导出所有模型
module.exports={
    User,
    Code,
    ArticleType,
    ProductType,
    UserType,
    Article,
    BannerType,
    Banner
};

   
    