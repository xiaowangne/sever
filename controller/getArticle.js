
// 查询文章列表 getArticleList
module.exports = (req, res) => {
    //  console.log('req.query ==> ', req.query);
    // res.send({
    //     msg: '查询文章列表成功',
    //     status: 1160
    // });
  
  // sql语句替换参数
  let params = {
    limit: Number(req.query.limit),
    offset: Number(req.query.offset),
    count: Number(req.query.count),
  };
  let sql = "SELECT `p`.`art_id` AS `artId`,`p`.`type_id` AS `typeId`,`p`.`title`,`p`.`status`,`p`.`img`,`p`.`img_more` AS `imgMore`,`p`.`content`,`p`.`description`,`p`.`created_at` AS `createdAt`,`p`.`updated_at` AS `updatedAt` ,`at`.`title` AS `typeName` FROM `article` AS `p` INNER JOIN  `article_type` AS `at` ON `p`.`type_id` = `at`.`type_id` AND `p`.`status` = 0 AND `at`.`status`= 0 AND `p`.`remove` = 0 AND `at`.`remove`= 0";

  
   //判断是否存在类型名称查询
   if (req.query.typeId) {
    params.typeId = req.query.typeId;
    sql += " AND `p`.`type_id` = :typeId"
  }
  sql += " ORDER BY `p`.`created_at` DESC ";
   // 判断拿多少条
   if (req.query.limit) {
    sql += " LIMIT 0, :limit";
  }

  if(req.query.offset && req.query.count){
    sql += "  LIMIT :offset, :count";
  }

  api.queryData(sql, 'SELECT', params).then(result => {
    res.send({ msg: '获取文章列表成功', status: 2020, data: result });
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({ msg: '获取文章列表失败', status: 2021 });
  })
}