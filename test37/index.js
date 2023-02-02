var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/json", function (req, res, next) {
  res.json([{ no: 1, clickTimes: 200, replyTimes: 30, title: "html基础1" }, { no: 2, clickTimes: 200, replyTimes: 30, title: "html基础1" }, { no: 3, clickTimes: 200, replyTimes: 30, title: "html基础1" }])
})
router.get("../public/iconfont/iconfont.css", function (req, res, next) {
  res.render()
})
module.exports = router;
