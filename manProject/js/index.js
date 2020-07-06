window.location.hash = "jx";
let arr = ["jx", "cd", "lx", "hw", "fx", "sh"];
let html = [
  ` 
    <div class='banner'>
    <img src="../img/pc1.png" alt="">
</div>

<h3>搭配设计师</h3>


<div class='shejipic'>
    <div class='pics'>
        <a href="#">
            <img src="../img/1.png" alt="">
        </a>
        <p>罗威</p>
    </div>
    <div class='pics'>
        <a href="#">
            <img src="../img/2.png" alt="">
        </a>
        <p>龙朋</p>
    </div>
    <div class='pics'>
        <a href="#">
            <img src="../img/3.png" alt="">
        </a>
        <p>钱赫书</p>
    </div>
    <div class='pics'>
        <a href="#">
            <img src="../img/4.png" alt="">
        </a>
        <p>Raul Kling</p>
    </div>
</div>


<div class='passage'>
    <a href="#">
        <img src="../img/style.png" alt="">
    </a>
    <p>松垮却有型的休闲穿搭</p>

    <div class='times'>
        <span>阅读5756</span>
        <span>2019年07月29日</span>
    </div>

</div>
`,
  `
<article class="box">
<div class="tbox">
    <div class="tlb tb">
        <img src="../img/cdb.png" alt="">
    </div>
    <div class="trb tb">
        <div class="word">
            <p>每 日 搭 配 | 夏 季 新 品</p>
            <p>FASHION MIX NEW ARRI</p>
        </div>
        <div class="bpic">
            <img src="../img/y.png" alt="">
        </div>
    </div>
</div>
<div class="bbox">
    <p>可乐tee的街头诠释</p>
    <p class="yd">阅读:6225 <time>08月06日</time></p>
</div>

</article>


<article class="box">
<div class="tbox">
    <div class="tlb tb">
        <img src="../img/jn.png" alt="">
    </div>
    <div class="trb tb">
        <div class="word">
            <p>每 日 搭 配 | 夏 季 新 品</p>
            <p>FASHION MIX NEW ARRI</p>
        </div>
        <div class="bpic">
            <img src="../img/y2.png" alt="">
        </div>
    </div>
</div>
<div class="bbox">
    <p>时尚与功能相结合的机能运动风</p>
    <p class="yd">阅读:6225 <time>08月06日</time></p>
</div>

</article>

`,
  ` 
<div class='banner'>
<img src="../img/pc1.png" alt="">
</div>

<h3>搭配设计师</h3>


<div class='shejipic'>
<div class='pics'>
    <a href="#">
        <img src="../img/1.png" alt="">
    </a>
    <p>罗威</p>
</div>
<div class='pics'>
    <a href="#">
        <img src="../img/2.png" alt="">
    </a>
    <p>龙朋</p>
</div>
<div class='pics'>
    <a href="#">
        <img src="../img/3.png" alt="">
    </a>
    <p>钱赫书</p>
</div>
<div class='pics'>
    <a href="#">
        <img src="../img/4.png" alt="">
    </a>
    <p>Raul Kling</p>
</div>
</div>


<div class='passage'>
<a href="#">
    <img src="../img/style.png" alt="">
</a>
<p>松垮却有型的休闲穿搭</p>

<div class='times'>
    <span>阅读5756</span>
    <span>2019年07月29日</span>
</div>

</div>
`,
  `
<article class="box">
<div class="tbox">
<div class="tlb tb">
    <img src="../img/cdb.png" alt="">
</div>
<div class="trb tb">
    <div class="word">
        <p>每 日 搭 配 | 夏 季 新 品</p>
        <p>FASHION MIX NEW ARRI</p>
    </div>
    <div class="bpic">
        <img src="../img/y.png" alt="">
    </div>
</div>
</div>
<div class="bbox">
<p>可乐tee的街头诠释</p>
<p class="yd">阅读:6225 <time>08月06日</time></p>
</div>

</article>


<article class="box">
<div class="tbox">
<div class="tlb tb">
    <img src="../img/jn.png" alt="">
</div>
<div class="trb tb">
    <div class="word">
        <p>每 日 搭 配 | 夏 季 新 品</p>
        <p>FASHION MIX NEW ARRI</p>
    </div>
    <div class="bpic">
        <img src="../img/y2.png" alt="">
    </div>
</div>
</div>
<div class="bbox">
<p>时尚与功能相结合的机能运动风</p>
<p class="yd">阅读:6225 <time>08月06日</time></p>
</div>

</article>

`,
  ` 
<div class='banner'>
<img src="../img/pc1.png" alt="">
</div>

<h3>搭配设计师</h3>


<div class='shejipic'>
<div class='pics'>
    <a href="#">
        <img src="../img/1.png" alt="">
    </a>
    <p>罗威</p>
</div>
<div class='pics'>
    <a href="#">
        <img src="../img/2.png" alt="">
    </a>
    <p>龙朋</p>
</div>
<div class='pics'>
    <a href="#">
        <img src="../img/3.png" alt="">
    </a>
    <p>钱赫书</p>
</div>
<div class='pics'>
    <a href="#">
        <img src="../img/4.png" alt="">
    </a>
    <p>Raul Kling</p>
</div>
</div>


<div class='passage'>
<a href="#">
    <img src="../img/style.png" alt="">
</a>
<p>松垮却有型的休闲穿搭</p>

<div class='times'>
    <span>阅读5756</span>
    <span>2019年07月29日</span>
</div>

</div>
`,
  `
<article class="box">
<div class="tbox">
<div class="tlb tb">
    <img src="../img/cdb.png" alt="">
</div>
<div class="trb tb">
    <div class="word">
        <p>每 日 搭 配 | 夏 季 新 品</p>
        <p>FASHION MIX NEW ARRI</p>
    </div>
    <div class="bpic">
        <img src="../img/y.png" alt="">
    </div>
</div>
</div>
<div class="bbox">
<p>可乐tee的街头诠释</p>
<p class="yd">阅读:6225 <time>08月06日</time></p>
</div>

</article>


<article class="box">
<div class="tbox">
<div class="tlb tb">
    <img src="../img/jn.png" alt="">
</div>
<div class="trb tb">
    <div class="word">
        <p>每 日 搭 配 | 夏 季 新 品</p>
        <p>FASHION MIX NEW ARRI</p>
    </div>
    <div class="bpic">
        <img src="../img/y2.png" alt="">
    </div>
</div>
</div>
<div class="bbox">
<p>时尚与功能相结合的机能运动风</p>
<p class="yd">阅读:6225 <time>08月06日</time></p>
</div>

</article>

`,
];

let css = [
  "../css/indexOne.css",
  "../css/s-chuanda.css",
  "../css/indexOne.css",
  "../css/s-chuanda.css",
  "../css/indexOne.css",
  "../css/s-chuanda.css",
];

let index = 0;

function xuan() {
  let cln = window.location.hash.slice(1);
  $(`.${cln}`).css({
    color: "#e48e1e",
    "border-bottom": " 0.01rem solid #e48e1e",
  });
}

$("nav li").click(function () {
  window.location.hash = $(this).prop("className");
  index = $(this).index();
  swit();
});
xuan();
huadong();

function xuanran() {
  $("nav li").css({
    color: "#333",
    "border-bottom": "0",
  });

  let cdk = document.querySelector("#cdlink");
  let sec = document.querySelector("section");
  cdk.href = css[index];
  sec.innerHTML = `<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570278925073&di=44df4398f3750422699cb67f61774e2f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F45fc5edc4159358771ff6fc4f3e98bd545a7e75f34281-Dexh3G_fw658" style="width:100%;margin-top:25%">`;
  setTimeout(function () {
    sec.innerHTML = html[index];
  }, 300);
}

function swit() {
  // console.log(window.location.hash)
  if (window.location.hash == `#${arr[index]}`) {
    xuanran();
    xuan();
  }
}

function huadong() {
  $("section").on("touchstart", function (e) {
    e.stopPropagation();

    startX = e.originalEvent.changedTouches[0].pageX;
  });
  $("section").on("touchmove", function (e) {
    e.stopPropagation();

    moveEndX = e.originalEvent.changedTouches[0].pageX;
    X = moveEndX - startX;
    if (X > 100) {
      // alert("向右滑动");
      setTimeout(function () {
        if (index > 0) {
          index--;
          window.location.hash = arr[index];
          swit();
        } else {
          return;
        }
      });
    } else if (X < -100) {
      //  alert("向左滑动");
      setTimeout(function () {
        if (index < 5) {
          index++;
          window.location.hash = arr[index];

          swit();
        } else {
          return;
        }
      });
    }
  });
}
