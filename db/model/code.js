// 用户模型
// 导入sequelize，并解构DataTypes，Model
const {DataTypes,Model} =require('sequelize');
// 创建Code模型并且继承model基类

class Code extends Model {}

// 定义模型字段
Code.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        comment:'表id'
    },
    codeId:{
        type:DataTypes.STRING(30),
        unique:true,
        allowNull:false,
        defaultValue:'',
        comment:'验证码id'
    },
    email:{
        type:DataTypes.STRING(40),
        allowNull:false,
        defaultValue:'',
        comment:'邮箱'
    },
    code:{
        type:DataTypes.STRING(10),
        allowNull:false,
        defaultValue:'',
        comment:'验证码'
    },
},{
    // 将模型映射到数据库中
    sequelize,
    modelName:'Code',
    // 定义表名
    tableName:'code',
})

// 模型同步到mysql中
 Code.sync({force:false});

//  导出code模型
module.exports=Code;



