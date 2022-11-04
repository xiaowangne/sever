//manage

const { Op } = require("sequelize");

//移除类型(假删除, 逻辑删除【更新某个字段来标记】)
module.exports = (req, res) => {
  // console.log('req.body ==> ', req.body);
  api.updateData(req.body.type, {
    remove: 1
  }, {
    typeId: {
      [Op.in]: req.body.typeIds
    }
  }).then(result => {
    res.send({msg: '删除类型成功', status: 1100, data: result});
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({msg: '删除类型失败', status: 1101});
  })
}