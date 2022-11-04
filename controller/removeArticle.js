//manage

const { Op } = require("sequelize");

//移除商品类型(假删除, 逻辑删除【更新某个字段来标记】)
module.exports = (req, res) => {
  // console.log('req.body ==> ', req.body);
  api.updateData("Article", {
    remove: 1
  }, {
    artId: {
      [Op.in]: req.body.artIds
    }
  }).then(result => {
    res.send({msg: '删除文章成功', status: 1210, data: result});
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({msg: '删除文章失败', status: 1211});
  })
}