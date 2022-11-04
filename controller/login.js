// 登录接口
module.exports = (req, res) => {
    let params = req.body;
    // console.log('params', params);

    // 查询邮箱是否被注册
    api.findData('User', {
        email: params.email
    }, ['userId', 'password']).then(result => {
        if (result.length == 0) {
            // 如果邮箱没有被注册，则执行注册
            res.send({
                msg: '该邮箱尚未注册',
                status: 1002
            });
        } else {
            //    验证密码是否正确
            let pass = utils.encodeString(params.password);
            if (pass === result[0].dataValues.password) {
                //登录成功, 以userId签名一个token
                let token = utils.signToken(result[0].dataValues.userId);
                //将token切片
                let tokens = token.split('.');
                let ts = {
                    //干扰项
                    rtsraiuu: 'asvDRes6HGslwgcfs6756FCBVNHs98sVB',
                    sfds: 'svattrr'
                };
                config.tokenOptions.keys.forEach((v, i) => {
                    ts[v] = tokens[i];
                })
                res.send({
                    msg: '登录成功',
                    status: 1000,
                    data: ts
                });
            } else {
                res.send({
                    msg: '邮箱或者密码不正确',
                    status: 1003
                });
            }
        }

    }).catch(err => {
        console.log('err=>', err);
        res.send({
            msg: '登录失败',
            status: 1001
        });
    })


}