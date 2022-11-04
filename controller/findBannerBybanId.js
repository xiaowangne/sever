//manage

//根据banId查询banner数据
module.exports = (req, res) => {
  console.log(req.query);
    api.findData('Banner', {
      banId: req.query.banId,
      remove: 0
    }, ['title','typeId', 'status','imgMore','description','url']).then(result => {
      res.send({msg: '查询数据成功', status: 1310, data: result});
    }).catch(err => {
      console.log('err ==> ', err);
      res.send({msg: '查询数据失败', status: 1311});
    })
  }