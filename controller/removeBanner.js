//manage

const { Op } = require("sequelize");

//移除商品类型(假删除, 逻辑删除【更新某个字段来标记】)
module.exports = (req, res) => {
  console.log('req.body ==> ', req.body);
  api.updateData("Banner", {
    remove: 1
  }, {
    banId: {
      [Op.in]: req.body.banIds
    }
  }).then(result => {
    res.send({msg: '删除成功', status: 1330, data: result});
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({msg: '删除失败', status: 1331});
  })
}