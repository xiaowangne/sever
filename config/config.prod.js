// 生产环境配置


// 开发环境配置

// 服务器基础配置
let serverOptions = {
	//主机
	host: 'http://127.0.0.1',

	// 端口
	port: 9000,
	//请求体大小限制
	limitBody: '800kb'
}
exports.serverOptions = serverOptions;

// 数据库配置
exports.mysqlOptions = {
	// 数据库名称
	database: 'server',
	// 用户名
	user: 'root',
	// 密码
	password: 'Xiaowang123',
	// 连接主机
	host: 'localhost',
	// 连接数据库类型
	dialect: 'mysql',
	//具有多个单词组成的字段名以_分隔，比如userId ==> user_id
	underscored: true,
	// 时区
	timezone: '+08:00'
}

// 加盐配置
exports.saltOptions = {
	// 密码
	password: '_pws',
	//token
	token: '_tks'
}

//发邮件配置
exports.emailOptions = {
	// 发件地址
	host: 'smtp.163.com',
	// 端口
	port: 465,
	//安全，当设置port为465，需要将secure设置为true
	secure: true,
	//用户名，邮箱账号
	user: 'w1670252826@163.com',
	//授权码
	pass: 'QSVLKPGIAAUBCXED'
}

// 验证码有效时间
exports.codeOptions = {
	//单位 分钟
	expires:5,
}

//token配置
exports.tokenOptions = {
	expires: '1d',
	keys: ['rtaad', 'sytdys', 'ahsyt']
  }

  //昵称配置
exports.nickNameOptions = [
	'白云',
	'青云',
	'老鹰',
	'彩虹'
  ]
  
  //配置访问静态目录的伪路径
  exports.staticBaseUrl = {
	base: '/sdsaafd/files',
	url: `${serverOptions.host}:${serverOptions.port}`
  }
