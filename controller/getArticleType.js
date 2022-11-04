// 查询类型列表 getTypeList
module.exports = (req, res) => {
    //sql语句替换参数
    let params = {
      limit: Number(req.query.limit),
    };
   

    let sql = "SELECT `t`.`type_id` AS `typeId`, `t`.`title`, `t`.`status`,`t`.`img`,`t`.`img_more` AS `imgMore`,`t`.`page_num` AS `pageNum`,`t`.`description`,`t`.`created_at` AS `createdAt`,`t`.`updated_at` AS `updatedAt` FROM `article_type` AS `t` WHERE `t`.`remove` = 0 AND `t`.`status` = 0 ORDER BY `t`.`created_at` DESC"  ;
    // 判断拿多少条
    if (req.query.limit) {
      sql += " LIMIT 0, :limit";
    }
    api.queryData(sql, 'SELECT', params).then(result => {
      res.send({ msg: '获取类型列表成功', status: 2010, data: result });
    }).catch(err => {
      console.log('err ==> ', err);
      res.send({ msg: '获取类型列表失败', status: 2011 });
    })
  }