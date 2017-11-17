free-bussiness
===

`Bootstrap` 截止目前已经升级到了 `v4.0.0-beta.2`，粗略的看了一下，`API` 有比较大的更新，于是随便找了个 [psd](https://pan.baidu.com/s/1nvpAa4T) 练练手，密码是 `251m`，顺便熟悉下新的 `API`，这个项目暂时只涉及到 `css` 布局方面，没有牵涉到任何 `js` 事件，可能以后有空会在这个项目的基础上更新吧~~


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

