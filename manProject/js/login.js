// function dianJi() {
//   $(".yanzheng").click(function(e) {
//     if (
//       $(".yanzheng").text() == "发送验证码" ||
//       $(".yanzheng").text() == "重新发送"
//     ) {
//       timers();
//       // fasong();
//       console.log(555);
//     }
//   });
// }

$(".iconfont").click(function() {
  timers2("即将上线，敬请期待~");
});
$(".register").click(function() {
  location.href = "register.html";
});

function timers2(text) {
  let time2 = new Date().setSeconds(new Date().getSeconds() + 2);
  let timer = setInterval(function() {
    let now = new Date();
    let s2 = time2 - now;
    let djs2 = new Date(s2);
    $(".tan").css("display", "block");
    $(".tan").html(text);
    if (djs2.getSeconds() == 0) {
      clearInterval(timer);
      $(".tan").css("display", "none");
    }
  }, 100);
}

// function fasong() {
//   var params = {
//     userEmail: $(".mail").val()
//   };

//   $.ajax({
//     url: "http://localhose:27017/api/v1/auth/reg",
//     type: "post",
//     data: params,
//     success: function(res) {
//       console.log(res);
//       if (res == "success") {
//         timers2("验证码发送成功");
//       } else {
//         timer2("似乎出错了呢，换个姿势？");
//       }
//     },
//     error: function(error) {
//       timers2("似乎出错了呢，换个姿势？");
//     }
//   });
// }
// $(".yanzheng").css("background", "#ccc");

// $(".mail").on("input", function() {
//   const emailrule = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
//   if (emailrule.test($(this).val())) {
//     $(".yanzheng").css("background", "#fff");
//   } else {
//     $(".yanzheng").css("background", "#ccc");
//   }
// });

$(".mail").on("change", function(e) {
  const emailrule = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (emailrule.test($(this).val())) {
    dianJi();
  }
});

$(".login2").click(function(e) {
  yanzheng();
});

$(".login").click(function(e) {
  window.location.href = "inde.html";
});

function yanzheng() {
  var yParams = {
    userName: $(".mail").val(),
    password: $(".code").val()
  };
  $.ajax({
    url: "http://localhost:3000/api/v1/auth/login",
    type: "post",
    data: yParams,
    success: function(res) {
      console.log(res);

      if (res.code == "success") {
        $.cookie("token", res.token);
        window.location.href = "inde.html";
      } else {
        timers2("请检查账号或密码~");
        return;
      }
    },
    error: function(error) {
      console.log(error);
      timers2("请检查网络是否连接~");
    }
  });
}
