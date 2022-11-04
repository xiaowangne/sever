
// 查询文章列表 findArticleList
module.exports = (req, res) => {
    //  console.log('req.query ==> ', req.query);
    // res.send({
    //     msg: '查询文章列表成功',
    //     status: 1160
    // });
  
  // sql语句替换参数
  let params = {
    typeName : req.query.name
  };
  let sql = "SELECT `p`.`type_name` AS `typeName`,`p`.`title`,`p`.`img`,`p`.`url`,`p`.`description`,`p`.`created_at` AS `createdAt`,`p`.`updated_at` AS `updatedAt` ,`at`.`title` AS `typeName` FROM `banner` AS `p` INNER JOIN  `banner_type` AS `at` ON `p`.`type_id` = `at`.`type_id`AND `p`.`status`=0 AND `at`.`status`=0 AND `p`.`remove` = 0 AND `at`.`remove`= 0";
   
    sql += " AND `p`.`type_name` = :typeName ORDER BY `p`.`created_at` DESC "

  api.queryData(sql, 'SELECT', params).then(result => {
    res.send({ msg: '获取轮播图成功', status: 2050, data: result });
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({ msg: '获取轮播图失败', status:2050 });
  })
}