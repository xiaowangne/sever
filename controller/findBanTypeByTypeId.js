//manage

//根据typeId查询类型数据
module.exports = (req, res) => {
    api.findData('BannerType', {
      typeId: req.query.typeId,
      remove: 0
    }, ['title', 'status','description']).then(result => {
      res.send({msg: '查询类型数据成功', status: 1260, data: result});
    }).catch(err => {
      console.log('err ==> ', err);
      res.send({msg: '查询类型数据失败', status: 1261});
    })
  }