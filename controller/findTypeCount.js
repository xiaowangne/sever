//manage

//查询商品类型总数量
module.exports = (req, res) => {
  // let sql = "SELECT COUNT(`t`.`type_id`) AS `count` FROM `type` AS `t` INNER JOIN `user_type` AS `ut` ON `ut`.`type_id` = `t`.`type_id` AND `t`.`remove` = 0 AND `ut`.`user_id` = :userId";

  //  console.log('req.query ==> ', req.query);
  //   res.send({
  //       msg: '查询类型总数成功',
  //       status: 1200
  //   });
  
    //sql语句替换参数
    let params = {
      userId: req.userId,
  };

  let sql = "SELECT COUNT(`t`.`type_id`) AS `count` FROM `article_type` AS `t` INNER JOIN `user_type` AS `ut` ON `ut`.`type_id` = `t`.`type_id` AND `ut`.`user_id` = :userId AND `t`.`remove` = 0";

  //判断是否存在类型名称查询
if (req.query.title) {
  sql += " AND `t`.`title` LIKE '%" + req.query.title + "%'";
}

//判断是否存在状态
if (req.query.status) {
  params.status = req.query.status;
  sql += " AND `t`.`status` = :status";
}

// sql += " ORDER BY `t`.`created_at` DESC LIMIT 0, 10";

 api.queryData(sql, 'SELECT', params).then(result => {
    res.send({msg: '查询类型数量成功', status: 1110, data: result});
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({msg: '查询类型数量失败', status: 1111});
  })
}