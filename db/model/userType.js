// 用户-类型模型
// 导入sequelize，并解构DataTypes，Model
const {DataTypes,Model} =require('sequelize');
// 创建Code模型并且继承model基类

class UserType extends Model {}

// 定义模型字段
UserType.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        comment:'表id'
    },
    typeId:{
        type:DataTypes.STRING(30),
        allowNull:false,
        defaultValue:'',
        comment:'类型id'
    },
    userId:{
        type:DataTypes.STRING(30),
        allowNull:false,
        defaultValue:'',
        comment:'用户id'
    },
  
},{
    // 将模型映射到数据库中
    sequelize,
    modelName:'UserType',
    // 定义表名
    tableName:'user_type',
})

// 模型同步到mysql中
 UserType.sync({force:false});

//  导出code模型
module.exports=UserType;



