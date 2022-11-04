// banner分类模型
// 导入sequelize，并解构DataTypes，Model
const {DataTypes,Model} =require('sequelize');
// 创建Banner模型并且继承model基类

class BannerType extends Model {}

// 定义模型字段
BannerType.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        comment:'表id'
    },
    typeId:{
        type:DataTypes.STRING(30),
        unique:true,
        allowNull:false,
        defaultValue:'',
        comment:'分类id'
    },
    title:{
        type:DataTypes.STRING(50),
        allowNull:false,
        defaultValue:'',
        comment:'类型名称'
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:'0',
        comment:'类型状态0正常1冻结'
    },
    description:{
        type:DataTypes.STRING(500),
        allowNull:true,
        defaultValue:'',
        comment:'描述'
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
    modelName:'BannerType',
    // 定义表名
    tableName:'banner_type',
})

// 模型同步到mysql中
BannerType.sync({force:false});

//  导出code模型
module.exports=BannerType;



