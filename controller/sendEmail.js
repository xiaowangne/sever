// 发邮件验证码
module.exports = (req, res) => {
    // 随机生成6位数的验证码
    let code=utils.createValidcode(6);
    
    // 生成验证码id
    let codeId='c_'+new Date().getTime();

    // 保存到数据库中再发邮件
    api.createData('Code',{
        codeId,
        email:req.body.email,
        code
    }).then(result=>{
        // console.log(result);
        // res.send({msg:'验证码发送成功',status:1010,data:{codeId:result.dataValues.codeId}})
        // return;
        // 开发测试屏蔽发邮件
        utils.sendEmailCode({
            // 发件者邮箱地址
            from: config.emailOptions.user,
            //接收邮件地址，如果存在多个接收邮件地址，每个邮箱地址需要使用逗号隔开
            to: req.body.email,
            // 邮件主题
            subject: '后台系统管理',
            // 邮件文本内容
            text:`验证码：${code}，五分钟内有效`,
        }).then(()=>{
            res.send({msg:'验证码发送成功',status:1010,data:{codeId:result.dataValues.codeId}})
        }).catch(err=>{
            console.log(err);
            res.send({msg:'验证码发送失败',status:1011})
        })
    }).catch(err=>{
        console.log(err);
        res.send({msg:'验证码发送失败',status:1011})
    })
   
}