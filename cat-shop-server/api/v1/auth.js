const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // 对jwt数据进行加密处理
const svgCaptcha = require("svg-captcha");
// 注册路由
const { User, Manager } = require("../../models");
const { jwtSecret } = require("../../utils/config");

router.get("/img_code", (req, res) => {
  //验证码接口
  const captcha = svgCaptcha.create({
    noise: 3, // 干扰线条的数量
    background: "#ff5033", // 背景颜色
  });
  // 将图片的验证码存入到 session 中
  req.session.img_code = captcha.text.toLocaleUpperCase(); // 将验证码装换为大写
  res.type("svg");
  res.send(captcha.data);
});

router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const { userName, password } = req.body;
    //验证码
    const { img_code } = req.body;
    const user = await User.findOne({
      userName,
    });
    if (user) {
      const isValidated = bcrypt.compareSync(password, user.password); // 验证密码
      if (isValidated) {
        // img_code 获取传递的图片验证码 ,如果不相等，验证码错误
        if (img_code) {
          if (img_code.toLocaleUpperCase() !== req.session.img_code) {
            res.json({
              code: "400",
              message: "验证码错误",
            });
            return false
          }
        }
        const token = jwt.sign(
          {
            userId: user.id,
          },
          jwtSecret,
          {
            expiresIn: "10h",
          }
        );
        res.json({
          code: "success",
          token,
          message: "登陆成功",
        });
      } else {
        res.json({
          code: "error",
          message: "用户密码错误！",
        });
      }
    } else {
      res.json({
        code: "error",
        message: "用户信息不存在！",
      });
    }
  } catch (err) {
    next(err);
  }
});


router.post("/reg", async (req, res, next) => {
  try {
    const { userName } = req.body;
    console.log(userName);
    const isUserExist = await User.count({
      userName,
    });
    if (isUserExist > 0) {
      res.json({
        code: "error",
        message: "用户名已存在！",
      });
    } else {
      const user = new User(req.body);
      const { password } = req.body;
      const slat = bcrypt.genSaltSync(10);
      const pwd = bcrypt.hashSync(password, slat); // 对密码进行加密
      user.password = pwd;
      const userResult = await user.save();
      // res.json(userResult);
      const token = jwt.sign(
        {
          userId: userResult.id,
        },
        jwtSecret,
        {
          expiresIn: "10h",
        }
      );
      res.json({
        code: "success",
        token,
      });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/manager_login", async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      res.json({
        code: "error",
        message: "参数错误！",
      });
      return;
    }
    const u = await Manager.findOne({ userName });
    const isPwdValidated = bcrypt.compareSync(password, u.password);
    if (u) {
      if (isPwdValidated) {
        res.json({
          code: "success",
          token: jwt.sign(
            {
              userId: u.id,
            },
            jwtSecret,
            {
              expiresIn: "10h",
            }
          ),
        });
      } else {
        res.json({
          code: "error",
          message: "用户密码错误！",
        });
      }
    } else {
      res.json({
        code: "error",
        message: "用户信息不存在！",
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
