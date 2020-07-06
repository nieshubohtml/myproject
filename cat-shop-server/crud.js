const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/app")
  .then(res => console.log("数据库连接成功"))
  .catch(err => console.log("数据库连接失败"));

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    coverImg: {
      type: String,
      required: true,
      default: ""
    },
    recipe: {
      type: Array,
      required: true
    },
    beforePrice: {
      type: Number
    },
    currentPrice: {
      type: Number
    },
    id: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);
const Recipe = mongoose.model("recipe", recipeSchema);

const foodSchema = new mongoose.Schema(
  {
    authorImg: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    desc: {
      type: String
    },
    author: {
      type: String,
      required: true
    },
    coverImg: {
      type: String,
      required: true,
      default: ""
    },
    recipe: {
      type: Array,
      required: true
    }
  },
  {
    timestamps: true
  }
);
const Food = mongoose.model("food", foodSchema);
console.log(1);
const cheerio = require("cheerio");
const axios = require("axios").default;
const iconv = require("iconv-lite");
function loadData(page) {
  axios
    .get("http://www.xiachufang.com/recipe/" + page, {
      responseType: "arraybuffer"
    })
    .then(res => {
      var $ = cheerio.load(iconv.decode(res.data, "UTF-8"));
      var food = {};
      //封面
      food.coverImg = $(".recipe-show .cover img").attr("src");
      // 标题
      food.name = $(".main-panel .page-title")
        .text()
        .trim();
      //作者
      food.author = $(".author .avatar-link span").text();

      //作者头像
      food.authorImg = $(".author .avatar-link img").attr("src");
      //做法
      food.desc = $(".desc")
        .text()
        .trim();
      //描述
      let datas = [];
      $(".ings table tr").each(function() {
        let data = {};
        data.thing = $(this)
          .find(".name")
          .text()
          .trim();
        data.amout = $(this)
          .find(".unit")
          .text()
          .trim();
        datas.push(data);
      });
      food.recipe = datas;
      Food.insertMany(food)
        .then(res => console.log("书籍信息采集成功"))
        .catch(err => console.log(err));
    });
}

Recipe.find({}).then(res => {
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    arr.push(res[i].id);
    loadData(arr[i]);
  }
});
