// 切换banner分类状态 
module.exports = (req, res) => {
  //     res.send({
  //         msg: '切换类型状态成功',
  //         status: 1070
  //     });

  api.updateData("BannerType", {
    status: req.body.status
  }, {
    typeId: req.body.typeId
  }).then(result => {
    console.log(result);
    res.send({
      msg: '切换类型状态成功', status: 1240, data: {
        result,
        status: req.body.status
      }
    });
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({ msg: '切换类型状态失败', status: 1241 });
  })
}