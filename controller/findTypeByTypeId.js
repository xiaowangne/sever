//manage

//根据typeId查询类型数据
module.exports = (req, res) => {
    api.findData('ArticleType', {
      typeId: req.query.typeId,
      remove: 0
    }, ['title', 'status','imgMore','description','pageNum']).then(result => {
      res.send({msg: '查询类型数据成功', status: 1080, data: result});
    }).catch(err => {
      console.log('err ==> ', err);
      res.send({msg: '查询类型数据失败', status: 1081});
    })
  }