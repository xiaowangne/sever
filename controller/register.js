
// 注册接口
module.exports = (req, res) => {
    let params = req.body;
    // console.log('params', params);


    // 查询邮箱是否被注册
    api.findData('User', {
        email: params.email
    }).then(result => {
        // 如果邮箱没有被注册，则执行注册
        if (result.length == 0) {
            // 创建userId
            let userId = 'u_' + new Date().getTime();
            // 加密密码
            let password = utils.encodeString(params.password);
            //随机生一个昵称
            let nickName = utils.getRandomElement(config.nickNameOptions);

            // 将数据写入数据库
            api.createData('User', {
                userId,
                email: params.email,
                password,
                nickName
            }).then(r1 => {
                // console.log('result=>', r1);
                // res.send({
                //     msg: '注册成功',
                //     data: r1
                // });
                res.send({
                    msg: '注册成功',status:1000
                });
            }).catch(err => {
                // console.log('err=>', err);
                res.send({
                    msg: '注册失败',status:1001
                });
            })
        } else {
            res.send({
                msg: '邮箱已被注册',status:1002
            });
        }

    }).catch(err => {
        // console.log('err=>', err);
        res.send({
            msg: '注册失败',status:1003
        });
    })


}