// 产品分类模型
// 导入sequelize，并解构DataTypes，Model
const {DataTypes,Model} =require('sequelize');
// 创建Code模型并且继承model基类

class ProductType extends Model {}

// 定义模型字段
ProductType.init({
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
    pageNum:{
        type:DataTypes.INTEGER(5),
        allowNull:false,
        defaultValue:'10',
        comment:'分页数量'
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
    modelName:'ProductType',
    // 定义表名
    tableName:'product_type',
})

// 模型同步到mysql中
ProductType.sync({force:false});

//  导出code模型
module.exports=ProductType;



