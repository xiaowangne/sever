//manage

//根据Id查询文章数据
module.exports = (req, res) => {
    api.findData('Article', {
      artId: req.query.artId,
      remove: 0
    }, ['title','typeId', 'status','imgMore','description','content','createdAt']).then(result => {
      res.send({msg: '获取文章详情成功', status: 2030, data: result});
    }).catch(err => {
      console.log('err ==> ', err);
      res.send({msg: '获取文章详情失败', status: 2031});
    })
  }