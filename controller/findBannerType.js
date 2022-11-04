//manage

//获取类型
module.exports = (req, res) => {

  let sql = "SELECT `t`.`type_id` AS `typeId`, `t`.`title`, `t`.`status`, `t`.`created_at` AS `createdAt`, `t`.`updated_at` AS `updatedAt` FROM `banner_type` AS `t` WHERE `t`.`remove` = 0 ORDER BY`t`.`created_at` DESC";

  api.queryData(sql, 'SELECT').then(result => {
    res.send({msg: '查询类型成功', status: 1230, data: result});
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({msg: '查询类型失败', status: 1231});
  })

  
}