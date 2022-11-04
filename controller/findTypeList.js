// 查询类型列表 findTypeList
module.exports = (req, res) => {
  // console.log('req.query ==> ', req.query);
  // res.send({
  //     msg: '查询商品类型列表成功',
  //     status: 1060
  // });
  // let sql = "SELECT `t`.`type_id` AS `typeId`, `t`.`title`, `t`.`status`,`t`.`img`,`t`.`img_more` AS `imgMore`,`t`.`description`,`t`.`created_at` AS `createdAt`,`t`.`updated_at` AS `updatedAt` FROM `article_type` AS `t` INNER JOIN `user_type` AS `ut` ON `ut`.`type_id` = `t`.`type_id` AND `ut`.`user_id` = 'u_1659944804287' AND `t`.`remove` = 0 AND `t`.`title` LIKE '%新闻%' AND `t`.`status` = 0 ORDER BY `t`.`created_at` DESC LIMIT 0, 2";

  //sql语句替换参数
  let params = {
    userId: req.userId,
    offset: Number(req.query.offset),
    count: Number(req.query.count)
  };
  let sql = "SELECT `t`.`type_id` AS `typeId`, `t`.`title`, `t`.`status`,`t`.`img`,`t`.`img_more` AS `imgMore`,`t`.`page_num` AS `pageNum`,`t`.`description`,`t`.`created_at` AS `createdAt`,`t`.`updated_at` AS `updatedAt` FROM `article_type` AS `t` INNER JOIN `user_type` AS `ut` ON `ut`.`type_id` = `t`.`type_id` AND `ut`.`user_id` = :userId AND `t`.`remove` = 0";

  //判断是否存在类型名称查询
  if (req.query.title) {
    sql += " AND `t`.`title` LIKE '%" + req.query.title + "%'";
  }

  //判断是否存在状态
  if (req.query.status) {
    params.status = req.query.status;
    sql += " AND `t`.`status` = :status";
  }

  sql += " ORDER BY `t`.`created_at` DESC LIMIT :offset, :count";

  api.queryData(sql, 'SELECT', params).then(result => {
    res.send({ msg: '查询类型列表成功', status: 1060, data: result });
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({ msg: '查询类型列表失败', status: 1061 });
  })
}