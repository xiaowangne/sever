// 文章模型
// 导入sequelize，并解构DataTypes，Model
const {DataTypes,Model} =require('sequelize');
// 创建Article模型并且继承model基类

class Article extends Model {}

// 定义模型字段
Article.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        comment:'表id'
    },
    artId:{
        type:DataTypes.STRING(30),
        unique:true,
        allowNull:true,
        defaultValue:'',
        comment:'文章id'
    },
    typeId:{
        type:DataTypes.STRING(30),
        allowNull:false,
        defaultValue:'',
        comment:'分类id'
    },
    title:{
        type:DataTypes.STRING(50),
        allowNull:false,
        defaultValue:'',
        comment:'文章名称'
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:'0',
        comment:'文章状态0正常1冻结'
    },
    img:{
        type:DataTypes.STRING(200),
        allowNull:true,
        defaultValue:'',
        comment:'图片'
    },
    imgMore:{
        type:DataTypes.STRING(2000),
        allowNull:true,
        defaultValue:'',
        comment:'主图以外的img六张图'
    },
    description:{
        type:DataTypes.STRING(500),
        allowNull:true,
        defaultValue:'',
        comment:'描述'
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:true,
        defaultValue:'',
        comment:'内容'
    },
    remove:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:'0',
        comment:'是否删除0正常1删除'
    }
},{
    // 将模型映射到数据库中
    sequelize,
    modelName:'Article',
    // 定义表名
    tableName:'article',
})

// 模型同步到mysql中
Article.sync({force:false});

//  导出code模型
module.exports=Article;



