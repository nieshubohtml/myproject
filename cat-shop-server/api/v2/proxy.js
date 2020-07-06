const router = require("express").Router();
const axios = require("axios").default;
const qs = require("qs");

// 代理服务器
router.post("/", async (req, res) => {
  // 两层对象
  var shuju = JSON.parse(req.body.shuju);
  console.log(shuju);
  const result = await axios.post(req.body.url, JSON.stringify(shuju));
  // console.log(result);
  res.send(result.data);
});

module.exports = router;
