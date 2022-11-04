// 用户模型
// 导入sequelize，并解构DataTypes，Model
const {DataTypes,Model} =require('sequelize');
// 创建User模型并且继承model基类

class User extends Model {}

// 定义模型字段
User.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        comment:'表id'
    },
    userId:{
        type:DataTypes.STRING(30),
        unique:true,
        allowNull:false,
        defaultValue:'',
        comment:'用户id'
    },
    email:{
        type:DataTypes.STRING(40),
        allowNull:false,
        defaultValue:'',
        comment:'邮箱'
    },
    password:{
        type:DataTypes.STRING(32),
        allowNull:false,
        defaultValue:'',
        comment:'密码'
    },
    nickName:{
        type:DataTypes.STRING(16),
        allowNull:false,
        defaultValue:'',
        comment:'昵称'
    },
    phone:{
        type:DataTypes.STRING(11),
        allowNull:true,
        defaultValue:null,
        comment:'电话'
    },
    sex:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:2,
        comment:'性别0女1男2位置'
    },
    avatar:{
        type:DataTypes.STRING(36),
        allowNull:false,
        defaultValue:'public/userImgs/default.jpg',
        comment:'头像'
    }
},{
    // 将模型映射到数据库中
    sequelize,
    modelName:'User',
    // 定义表名
    tableName:'user',
})

// 模型同步到mysql中
 User.sync({force:false});

//  导出user模型
module.exports=User;



