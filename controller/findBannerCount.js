
// 查询banner列表 
module.exports = (req, res) => {
    // res.send({
    //     msg: '查询文章列表成功',
    //     status: 1160
    // });
  
  // sql语句替换参数
  let params = {
    userId: req.userId,
  };
  let sql = "SELECT  COUNT(`p`.`ban_id`) AS `count` FROM `banner` AS `p` INNER JOIN  `banner_type` AS `at` ON `p`.`type_id` = `at`.`type_id` AND `p`.`remove` = 0 AND `at`.`remove`= 0";

  //判断是否存在类型名称查询
  if (req.query.title) {
    sql += " AND `p`.`title` LIKE '%" + req.query.title + "%'";
  }
   //判断是否存在类型名称查询
   if (req.query.typeId) {
    params.typeId = req.query.typeId;
    sql += " AND `p`.`type_id` = :typeId"
  }

  //判断是否存在状态
  if (req.query.status) {
    params.status = req.query.status;
    sql += " AND `p`.`status` = :status";
  }

  // sql += " ORDER BY `p`.`created_at` DESC LIMIT :offset, :count";

  api.queryData(sql, 'SELECT', params).then(result => {
    res.send({ msg: '查询总数成功', status: 1300, data: result });
  }).catch(err => {
    console.log('err ==> ', err);
    res.send({ msg: '查询总数失败', status: 1301 });
  })
}