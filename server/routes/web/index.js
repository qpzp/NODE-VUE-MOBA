module.exports = app => {
  const router = require('express').Router();

  const mongoose = require('mongoose');

  // const Article = require('../../models/Article');
  const Article = mongoose.model('Article');
  const Category = mongoose.model('Category');

  //导入新闻数据
  router.get('/news/init', async (req, res) => {

    const parent = await Category.findOne({
      name: '新闻分类'
    });
    const cats = await Category.find().where({
      parent: parent
    }).lean();

    const newsTitles = ["王者荣耀变身大作战揭秘赛总决赛来袭，花式对决精彩不断！", "【马上开拍】给你一个变身英雄的机会！还有豪华大奖等你来~", "【创作活动】这是一场不会输的战斗，英雄结局由你发挥", "王者荣耀四周岁啦，李白妲己喊你来赴约～", "王者荣耀四周岁，真功夫美团外卖开黑蒸能量套餐带你冲破次元", "10月30日全服不停机修复公告", "10月30日全服不停机更新公告", "11月1日体验服停机更新公告", "净化游戏环境声明及处罚公告（10月14日-10月31日）", "11月1日“演员”惩罚名单", "感恩有你 李白新星元登场 峡谷全新福利来袭", "【周年许愿树】活动公告", "【周年庆典 明星抽内测】活动公告", "极致网速，快乐上分，中国电信邀你畅快赢好礼", "【回顾王者独家记忆 领专属局内称号】活动公告", "10月31日【比赛服】版本更新公告", "高校联赛海选赛、区域联赛持续报名中  首周精彩赛事大回顾", "你是赛评师：eStar3：1送TES新版本首败，强势依旧的eStar冠军相有几分", "2019年王者荣耀冬季冠军杯赛制与名额规则公布！", "荣耀四周年---王者荣耀高校官方社团活动巡礼"];

    const newsList = newsTitles.map(title => {

      const randomCats = cats.slice().sort((a, b) => Math.random() - 0.5);

      return {
        categories: randomCats.slice(0, 2),
        title: title,
      };
    });

    await Article.deleteMany({});
    await Article.insertMany(newsList);

    res.send(newsList);

  });

  //新闻列表
  router.get('/news/list', async (req, res) => {
    // const parent = await Category.findOne({
    //   name: '新闻分类'
    // }).populate({
    //   path: 'children',
    //   populate: {
    //     path: 'newsList',
    //   }
    // }).lean();

    const parent = await Category.findOne({
      name: '新闻分类'
    });

    const cats = await Category.aggregate([
      {$match: {parent: parent._id}},
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      },
      {
        $addFields: {
          newsList: {$slice: ['$newsList', 5]}
        }
      }
    ]);

    const subCats = cats.map(v => v._id);
    console.log(subCats);

    cats.unshift({
      name: '热门',
      newsList: await Article.find().where({
        categories: {$in: subCats}
      }).populate('categories').limit(5).lean()
    });

    cats.map(cat => {
      cat.newsList.map(news => {
        news.categoryName = cat.name === '热门'
          ? news.categories[0].name
          : cat.name;
        return news;
      });
      return cat;
    });

    res.send(cats);
  });

  //导入英雄数据
  router.get('/news/heroes', async (req, res) => {

  });

  app.use('/web/api', router);
};
