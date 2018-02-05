free-bussiness
===

<del>`Bootstrap` 截止目前已经升级到了 `v4.0.0-beta.2`，</del>Bootstrap4已经正式发布了！粗略的看了一下，`API` 有比较大的更新，于是随便找了个 [psd](https://pan.baidu.com/s/1pKEtOYf) 练练手，密码是 `rq3c`，顺便熟悉下新的 `API`  

Preview
---

![view](https://github.com/carolyicheng666/free-bussiness/blob/master/introduce.png)



Update
---

*2017.11.16更新：*
1. 引入 `jQuery.easing.min.js` ，点击 `navbar` 会有效果
2. 引入 `Bootstrap.min.js` ， 添加下面的代码，使 `navbar` 手机端可以正常点击
``` javascript
$('.nav-link').click(function() {
  $('.navbar-collapse').collapse('hide');
});
```

*2017.11.17更新：*
1. 点击 `navbar` 的条目，`active`	状态更改
2. 回到顶部效果
3. 修改滚动条样式

*2017.11.20更新：*
1. 回到顶部效果优化
2. 原生css模式换成 `sass + autoprefixer + browser-sync` ，并使用 `gulp` 进行自动化构建，为了调试方便，这里 `gulp-sass` 编译采用 `{outputStyle: 'expanded'}` 的输出模式

*2018.1.4更新：*
1. 引入PostCSS，gulp-autoprefixer不在PostCSS支持的插件列表中，改用原版autoprefixer



Tips
---

1. 有的时候你可能会很反感 `row` 和 `col` 所产生的的间隙，我在源码中找到了 `no-gutters`，使用方式是在 `row` 后面加一个 `no-gutters`.
``` css
.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters > .col,
.no-gutters > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}
```

