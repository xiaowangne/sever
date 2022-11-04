// 切换文章状态 
module.exports = (req, res) => {
//  console.log('req.body ==> ', req.body);
//     res.send({
//         msg: '切换类型状态成功',
//         status: 1070
//     });

    //根据typeId查询类型是否存在
  api.findData('ArticleType', {
    typeId: req.body.typeId
  }).then(r => {
    // console.log('r ==> ', r);
    if (r.length > 0) {
      //根据artId修改status
      api.updateData(req.body.type, {
        status: req.body.status
      }, {
        artId: req.body.artId
      }).then(result => {
        console.log(result);
        res.send({
          msg: '切换文章状态成功', status: 1180, data: {
            result,
            status: req.body.status
          }
        });
      }).catch(err => {
        console.log('err ==> ', err);
        res.send({ msg: '切换文章状态失败', status: 1181 });
      })

    } else {
      res.send({ msg: '切换文章状态失败', status: 1181 });
    }
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({ msg: '切换文章状态失败', status: 1181 });
  })
}