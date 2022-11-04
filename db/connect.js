// 连接数据库

// 导入sequelize，解构Sequelize

const {
    Sequelize
} = require('sequelize');


// 导出连接实例
let sequelize = new Sequelize(config.mysqlOptions.database, config.mysqlOptions.user, config.mysqlOptions.password, {
    host: config.mysqlOptions.host,
    dialect:config.mysqlOptions.dialect,
    define: {
        underscored: config.mysqlOptions.underscored
    },
    timezone: config.mysqlOptions.timezone
});


module.exports = sequelize;

// 判断是否连接成功
// (async function(){
//         try{
//             // 调用测试连接的方法
//             await sequelize.authenticate();
//             console.log('连接成功');
//         }catch(err){
//             console.log('连接失败');
//         }
//     })();



