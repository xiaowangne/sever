//manage

//根据typeId查询类型数据
module.exports = (req, res) => {
    api.findData('Article', {
      artId: req.query.artId,
      remove: 0
    }, ['title','typeId', 'status','imgMore','description','content']).then(result => {
      res.send({msg: '查询文章数据成功', status: 1190, data: result});
    }).catch(err => {
      console.log('err ==> ', err);
      res.send({msg: '查询文章数据失败', status: 1191});
    })
  }