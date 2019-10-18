module.exports = (app) => {
  const express = require('express');
  const router = express.Router();
  const Category = require('../../models/Categories');

  //创建分类
  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body);
    res.send(model);
  });

  //获取分类列表
  router.get('/categories', async (req, res) => {
    const items = await Category.find().limit(10);
    res.send(items);
  });

  app.use('/admin/api', router);
};